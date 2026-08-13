# `dataAwsccWorkspaceswebIpAccessSettings` Submodule <a name="`dataAwsccWorkspaceswebIpAccessSettings` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspaceswebIpAccessSettings <a name="DataAwsccWorkspaceswebIpAccessSettings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspacesweb_ip_access_settings awscc_workspacesweb_ip_access_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings(scope: Construct, id: string, config: DataAwsccWorkspaceswebIpAccessSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig">DataAwsccWorkspaceswebIpAccessSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig">DataAwsccWorkspaceswebIpAccessSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspaceswebIpAccessSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isConstruct"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformElement"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformDataSource"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccWorkspaceswebIpAccessSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWorkspaceswebIpAccessSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWorkspaceswebIpAccessSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspacesweb_ip_access_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspaceswebIpAccessSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.associatedPortalArns">associatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.ipAccessSettingsArn">ipAccessSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.ipRules">ipRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList">DataAwsccWorkspaceswebIpAccessSettingsIpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList">DataAwsccWorkspaceswebIpAccessSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `associatedPortalArns`<sup>Required</sup> <a name="associatedPortalArns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.associatedPortalArns"></a>

```typescript
public readonly associatedPortalArns: string[];
```

- *Type:* string[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `ipAccessSettingsArn`<sup>Required</sup> <a name="ipAccessSettingsArn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.ipAccessSettingsArn"></a>

```typescript
public readonly ipAccessSettingsArn: string;
```

- *Type:* string

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.ipRules"></a>

```typescript
public readonly ipRules: DataAwsccWorkspaceswebIpAccessSettingsIpRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList">DataAwsccWorkspaceswebIpAccessSettingsIpRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.tags"></a>

```typescript
public readonly tags: DataAwsccWorkspaceswebIpAccessSettingsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList">DataAwsccWorkspaceswebIpAccessSettingsTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspaceswebIpAccessSettingsConfig <a name="DataAwsccWorkspaceswebIpAccessSettingsConfig" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

const dataAwsccWorkspaceswebIpAccessSettingsConfig: dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspacesweb_ip_access_settings#id DataAwsccWorkspaceswebIpAccessSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspaceswebIpAccessSettingsIpRules <a name="DataAwsccWorkspaceswebIpAccessSettingsIpRules" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRules.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

const dataAwsccWorkspaceswebIpAccessSettingsIpRules: dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRules = { ... }
```


### DataAwsccWorkspaceswebIpAccessSettingsTags <a name="DataAwsccWorkspaceswebIpAccessSettingsTags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTags.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

const dataAwsccWorkspaceswebIpAccessSettingsTags: dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspaceswebIpAccessSettingsIpRulesList <a name="DataAwsccWorkspaceswebIpAccessSettingsIpRulesList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.get"></a>

```typescript
public get(index: number): DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference <a name="DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRules">DataAwsccWorkspaceswebIpAccessSettingsIpRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWorkspaceswebIpAccessSettingsIpRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRules">DataAwsccWorkspaceswebIpAccessSettingsIpRules</a>

---


### DataAwsccWorkspaceswebIpAccessSettingsTagsList <a name="DataAwsccWorkspaceswebIpAccessSettingsTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.get"></a>

```typescript
public get(index: number): DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference <a name="DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebIpAccessSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTags">DataAwsccWorkspaceswebIpAccessSettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWorkspaceswebIpAccessSettingsTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTags">DataAwsccWorkspaceswebIpAccessSettingsTags</a>

---



