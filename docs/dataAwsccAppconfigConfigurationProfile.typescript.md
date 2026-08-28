# `dataAwsccAppconfigConfigurationProfile` Submodule <a name="`dataAwsccAppconfigConfigurationProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppconfigConfigurationProfile <a name="DataAwsccAppconfigConfigurationProfile" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appconfig_configuration_profile awscc_appconfig_configuration_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.Initializer"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

new dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile(scope: Construct, id: string, config: DataAwsccAppconfigConfigurationProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig">DataAwsccAppconfigConfigurationProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig">DataAwsccAppconfigConfigurationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppconfigConfigurationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isConstruct"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isTerraformElement"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.generateConfigForImport"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAppconfigConfigurationProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppconfigConfigurationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppconfigConfigurationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appconfig_configuration_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppconfigConfigurationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.deletionProtectionCheck">deletionProtectionCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.retrievalRoleArn">retrievalRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList">DataAwsccAppconfigConfigurationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.validators">validators</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList">DataAwsccAppconfigConfigurationProfileValidatorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

---

##### `deletionProtectionCheck`<sup>Required</sup> <a name="deletionProtectionCheck" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.deletionProtectionCheck"></a>

```typescript
public readonly deletionProtectionCheck: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.kmsKeyIdentifier"></a>

```typescript
public readonly kmsKeyIdentifier: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retrievalRoleArn`<sup>Required</sup> <a name="retrievalRoleArn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.retrievalRoleArn"></a>

```typescript
public readonly retrievalRoleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.tags"></a>

```typescript
public readonly tags: DataAwsccAppconfigConfigurationProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList">DataAwsccAppconfigConfigurationProfileTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validators`<sup>Required</sup> <a name="validators" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.validators"></a>

```typescript
public readonly validators: DataAwsccAppconfigConfigurationProfileValidatorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList">DataAwsccAppconfigConfigurationProfileValidatorsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppconfigConfigurationProfileConfig <a name="DataAwsccAppconfigConfigurationProfileConfig" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.Initializer"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

const dataAwsccAppconfigConfigurationProfileConfig: dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appconfig_configuration_profile#id DataAwsccAppconfigConfigurationProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppconfigConfigurationProfileTags <a name="DataAwsccAppconfigConfigurationProfileTags" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTags.Initializer"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

const dataAwsccAppconfigConfigurationProfileTags: dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTags = { ... }
```


### DataAwsccAppconfigConfigurationProfileValidators <a name="DataAwsccAppconfigConfigurationProfileValidators" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidators.Initializer"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

const dataAwsccAppconfigConfigurationProfileValidators: dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidators = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppconfigConfigurationProfileTagsList <a name="DataAwsccAppconfigConfigurationProfileTagsList" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.Initializer"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

new dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAppconfigConfigurationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppconfigConfigurationProfileTagsOutputReference <a name="DataAwsccAppconfigConfigurationProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

new dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTags">DataAwsccAppconfigConfigurationProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppconfigConfigurationProfileTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileTags">DataAwsccAppconfigConfigurationProfileTags</a>

---


### DataAwsccAppconfigConfigurationProfileValidatorsList <a name="DataAwsccAppconfigConfigurationProfileValidatorsList" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.Initializer"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

new dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.get"></a>

```typescript
public get(index: number): DataAwsccAppconfigConfigurationProfileValidatorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppconfigConfigurationProfileValidatorsOutputReference <a name="DataAwsccAppconfigConfigurationProfileValidatorsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppconfigConfigurationProfile } from '@cdktn/provider-awscc'

new dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidators">DataAwsccAppconfigConfigurationProfileValidators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidatorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppconfigConfigurationProfileValidators;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigConfigurationProfile.DataAwsccAppconfigConfigurationProfileValidators">DataAwsccAppconfigConfigurationProfileValidators</a>

---



