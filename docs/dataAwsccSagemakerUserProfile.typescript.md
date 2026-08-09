# `dataAwsccSagemakerUserProfile` Submodule <a name="`dataAwsccSagemakerUserProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerUserProfile <a name="DataAwsccSagemakerUserProfile" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_user_profile awscc_sagemaker_user_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile(scope: Construct, id: string, config: DataAwsccSagemakerUserProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig">DataAwsccSagemakerUserProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig">DataAwsccSagemakerUserProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerUserProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isConstruct"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerUserProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerUserProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerUserProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerUserProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.singleSignOnUserIdentifier">singleSignOnUserIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.singleSignOnUserValue">singleSignOnUserValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList">DataAwsccSagemakerUserProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.userProfileArn">userProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.userProfileName">userProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.userSettings">userSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `singleSignOnUserIdentifier`<sup>Required</sup> <a name="singleSignOnUserIdentifier" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.singleSignOnUserIdentifier"></a>

```typescript
public readonly singleSignOnUserIdentifier: string;
```

- *Type:* string

---

##### `singleSignOnUserValue`<sup>Required</sup> <a name="singleSignOnUserValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.singleSignOnUserValue"></a>

```typescript
public readonly singleSignOnUserValue: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerUserProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList">DataAwsccSagemakerUserProfileTagsList</a>

---

##### `userProfileArn`<sup>Required</sup> <a name="userProfileArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.userProfileArn"></a>

```typescript
public readonly userProfileArn: string;
```

- *Type:* string

---

##### `userProfileName`<sup>Required</sup> <a name="userProfileName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.userProfileName"></a>

```typescript
public readonly userProfileName: string;
```

- *Type:* string

---

##### `userSettings`<sup>Required</sup> <a name="userSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.userSettings"></a>

```typescript
public readonly userSettings: DataAwsccSagemakerUserProfileUserSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerUserProfileConfig <a name="DataAwsccSagemakerUserProfileConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileConfig: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_user_profile#id DataAwsccSagemakerUserProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerUserProfileTags <a name="DataAwsccSagemakerUserProfileTags" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileTags: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTags = { ... }
```


### DataAwsccSagemakerUserProfileUserSettings <a name="DataAwsccSagemakerUserProfileUserSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings <a name="DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement <a name="DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings <a name="DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages <a name="DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec <a name="DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs <a name="DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig <a name="DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig <a name="DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig <a name="DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig <a name="DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings <a name="DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages <a name="DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings <a name="DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsSharingSettings <a name="DataAwsccSagemakerUserProfileUserSettingsSharingSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsSharingSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings <a name="DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings <a name="DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings <a name="DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings = { ... }
```


### DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases <a name="DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

const dataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases: dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerUserProfileTagsList <a name="DataAwsccSagemakerUserProfileTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerUserProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerUserProfileTagsOutputReference <a name="DataAwsccSagemakerUserProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTags">DataAwsccSagemakerUserProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileTags">DataAwsccSagemakerUserProfileTags</a>

---


### DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement">lifecycleManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes">maxIdleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes">minIdleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `lifecycleManagement`<sup>Required</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement"></a>

```typescript
public readonly lifecycleManagement: string;
```

- *Type:* string

---

##### `maxIdleTimeoutInMinutes`<sup>Required</sup> <a name="maxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes"></a>

```typescript
public readonly maxIdleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `minIdleTimeoutInMinutes`<sup>Required</sup> <a name="minIdleTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes"></a>

```typescript
public readonly minIdleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```typescript
public readonly idleSettings: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---


### DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList <a name="DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```typescript
public readonly imageVersionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>

---


### DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---


### DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArn">builtInLifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement"></a>

```typescript
public readonly appLifecycleManagement: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `builtInLifecycleConfigArn`<sup>Required</sup> <a name="builtInLifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArn"></a>

```typescript
public readonly builtInLifecycleConfigArn: string;
```

- *Type:* string

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImages"></a>

```typescript
public readonly customImages: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPath">fileSystemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPath"></a>

```typescript
public readonly fileSystemPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a>

---


### DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPath">fileSystemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPath"></a>

```typescript
public readonly fileSystemPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a>

---


### DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList <a name="DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfig">efsFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfig">fsxLustreFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfig">s3FileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `efsFileSystemConfig`<sup>Required</sup> <a name="efsFileSystemConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfig"></a>

```typescript
public readonly efsFileSystemConfig: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference</a>

---

##### `fsxLustreFileSystemConfig`<sup>Required</sup> <a name="fsxLustreFileSystemConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfig"></a>

```typescript
public readonly fsxLustreFileSystemConfig: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference</a>

---

##### `s3FileSystemConfig`<sup>Required</sup> <a name="s3FileSystemConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfig"></a>

```typescript
public readonly s3FileSystemConfig: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>

---


### DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a>

---


### DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gid">gid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uid">uid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig">DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig">DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

---


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement">lifecycleManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes">maxIdleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes">minIdleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `lifecycleManagement`<sup>Required</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement"></a>

```typescript
public readonly lifecycleManagement: string;
```

- *Type:* string

---

##### `maxIdleTimeoutInMinutes`<sup>Required</sup> <a name="maxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes"></a>

```typescript
public readonly maxIdleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `minIdleTimeoutInMinutes`<sup>Required</sup> <a name="minIdleTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes"></a>

```typescript
public readonly minIdleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```typescript
public readonly idleSettings: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>

---


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```typescript
public readonly imageVersionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>

---


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArns">assumableRoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArns">executionRoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assumableRoleArns`<sup>Required</sup> <a name="assumableRoleArns" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArns"></a>

```typescript
public readonly assumableRoleArns: string[];
```

- *Type:* string[]

---

##### `executionRoleArns`<sup>Required</sup> <a name="executionRoleArns" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArns"></a>

```typescript
public readonly executionRoleArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArn">builtInLifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories">codeRepositories</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettings">emrSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement"></a>

```typescript
public readonly appLifecycleManagement: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `builtInLifecycleConfigArn`<sup>Required</sup> <a name="builtInLifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArn"></a>

```typescript
public readonly builtInLifecycleConfigArn: string;
```

- *Type:* string

---

##### `codeRepositories`<sup>Required</sup> <a name="codeRepositories" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories"></a>

```typescript
public readonly codeRepositories: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList</a>

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImages"></a>

```typescript
public readonly customImages: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `emrSettings`<sup>Required</sup> <a name="emrSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettings"></a>

```typescript
public readonly emrSettings: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference</a>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings">DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings">DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList <a name="DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```typescript
public readonly imageVersionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>

---


### DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImages"></a>

```typescript
public readonly customImages: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfs">autoMountHomeEfs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigs">customFileSystemConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfig">customPosixUserConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference">DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUri">defaultLandingUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettings">rStudioServerProAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.sharingSettings">sharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.studioWebPortal">studioWebPortal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettings">studioWebPortalSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettings">DataAwsccSagemakerUserProfileUserSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoMountHomeEfs`<sup>Required</sup> <a name="autoMountHomeEfs" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfs"></a>

```typescript
public readonly autoMountHomeEfs: string;
```

- *Type:* string

---

##### `codeEditorAppSettings`<sup>Required</sup> <a name="codeEditorAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettings"></a>

```typescript
public readonly codeEditorAppSettings: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference</a>

---

##### `customFileSystemConfigs`<sup>Required</sup> <a name="customFileSystemConfigs" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigs"></a>

```typescript
public readonly customFileSystemConfigs: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList">DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList</a>

---

##### `customPosixUserConfig`<sup>Required</sup> <a name="customPosixUserConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfig"></a>

```typescript
public readonly customPosixUserConfig: DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference">DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference</a>

---

##### `defaultLandingUri`<sup>Required</sup> <a name="defaultLandingUri" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUri"></a>

```typescript
public readonly defaultLandingUri: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `jupyterLabAppSettings`<sup>Required</sup> <a name="jupyterLabAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettings"></a>

```typescript
public readonly jupyterLabAppSettings: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference</a>

---

##### `jupyterServerAppSettings`<sup>Required</sup> <a name="jupyterServerAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings"></a>

```typescript
public readonly jupyterServerAppSettings: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `kernelGatewayAppSettings`<sup>Required</sup> <a name="kernelGatewayAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```typescript
public readonly kernelGatewayAppSettings: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `rStudioServerProAppSettings`<sup>Required</sup> <a name="rStudioServerProAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettings"></a>

```typescript
public readonly rStudioServerProAppSettings: DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference</a>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `sharingSettings`<sup>Required</sup> <a name="sharingSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.sharingSettings"></a>

```typescript
public readonly sharingSettings: DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference</a>

---

##### `spaceStorageSettings`<sup>Required</sup> <a name="spaceStorageSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettings"></a>

```typescript
public readonly spaceStorageSettings: DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference</a>

---

##### `studioWebPortal`<sup>Required</sup> <a name="studioWebPortal" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.studioWebPortal"></a>

```typescript
public readonly studioWebPortal: string;
```

- *Type:* string

---

##### `studioWebPortalSettings`<sup>Required</sup> <a name="studioWebPortalSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettings"></a>

```typescript
public readonly studioWebPortalSettings: DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettings">DataAwsccSagemakerUserProfileUserSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatus">accessStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroup">userGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings">DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessStatus`<sup>Required</sup> <a name="accessStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatus"></a>

```typescript
public readonly accessStatus: string;
```

- *Type:* string

---

##### `userGroup`<sup>Required</sup> <a name="userGroup" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroup"></a>

```typescript
public readonly userGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings">DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption">notebookOutputOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId">s3KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettings">DataAwsccSagemakerUserProfileUserSettingsSharingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notebookOutputOption`<sup>Required</sup> <a name="notebookOutputOption" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption"></a>

```typescript
public readonly notebookOutputOption: string;
```

- *Type:* string

---

##### `s3KmsKeyId`<sup>Required</sup> <a name="s3KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId"></a>

```typescript
public readonly s3KmsKeyId: string;
```

- *Type:* string

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsSharingSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSharingSettings">DataAwsccSagemakerUserProfileUserSettingsSharingSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGb">defaultEbsVolumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGb">maximumEbsVolumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultEbsVolumeSizeInGb`<sup>Required</sup> <a name="defaultEbsVolumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGb"></a>

```typescript
public readonly defaultEbsVolumeSizeInGb: number;
```

- *Type:* number

---

##### `maximumEbsVolumeSizeInGb`<sup>Required</sup> <a name="maximumEbsVolumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGb"></a>

```typescript
public readonly maximumEbsVolumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettings">defaultEbsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings">DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultEbsStorageSettings`<sup>Required</sup> <a name="defaultEbsStorageSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettings"></a>

```typescript
public readonly defaultEbsStorageSettings: DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference">DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings">DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings</a>

---


### DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList <a name="DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageName">sageMakerImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliases">versionAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sageMakerImageName`<sup>Required</sup> <a name="sageMakerImageName" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageName"></a>

```typescript
public readonly sageMakerImageName: string;
```

- *Type:* string

---

##### `versionAliases`<sup>Required</sup> <a name="versionAliases" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliases"></a>

```typescript
public readonly versionAliases: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>

---


### DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference <a name="DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerUserProfile } from '@cdktn/provider-awscc'

new dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypes">hiddenAppTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypes">hiddenInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlTools">hiddenMlTools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliases">hiddenSageMakerImageVersionAliases</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList">DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings">DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hiddenAppTypes`<sup>Required</sup> <a name="hiddenAppTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypes"></a>

```typescript
public readonly hiddenAppTypes: string[];
```

- *Type:* string[]

---

##### `hiddenInstanceTypes`<sup>Required</sup> <a name="hiddenInstanceTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypes"></a>

```typescript
public readonly hiddenInstanceTypes: string[];
```

- *Type:* string[]

---

##### `hiddenMlTools`<sup>Required</sup> <a name="hiddenMlTools" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlTools"></a>

```typescript
public readonly hiddenMlTools: string[];
```

- *Type:* string[]

---

##### `hiddenSageMakerImageVersionAliases`<sup>Required</sup> <a name="hiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliases"></a>

```typescript
public readonly hiddenSageMakerImageVersionAliases: DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList">DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerUserProfile.DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings">DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings</a>

---



