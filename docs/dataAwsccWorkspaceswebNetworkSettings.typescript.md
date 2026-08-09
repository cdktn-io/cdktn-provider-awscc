# `dataAwsccWorkspaceswebNetworkSettings` Submodule <a name="`dataAwsccWorkspaceswebNetworkSettings` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspaceswebNetworkSettings <a name="DataAwsccWorkspaceswebNetworkSettings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/workspacesweb_network_settings awscc_workspacesweb_network_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebNetworkSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings(scope: Construct, id: string, config: DataAwsccWorkspaceswebNetworkSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig">DataAwsccWorkspaceswebNetworkSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig">DataAwsccWorkspaceswebNetworkSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspaceswebNetworkSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isConstruct"></a>

```typescript
import { dataAwsccWorkspaceswebNetworkSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isTerraformElement"></a>

```typescript
import { dataAwsccWorkspaceswebNetworkSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isTerraformDataSource"></a>

```typescript
import { dataAwsccWorkspaceswebNetworkSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.generateConfigForImport"></a>

```typescript
import { dataAwsccWorkspaceswebNetworkSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccWorkspaceswebNetworkSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWorkspaceswebNetworkSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWorkspaceswebNetworkSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/workspacesweb_network_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspaceswebNetworkSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.associatedPortalArns">associatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.networkSettingsArn">networkSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList">DataAwsccWorkspaceswebNetworkSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `associatedPortalArns`<sup>Required</sup> <a name="associatedPortalArns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.associatedPortalArns"></a>

```typescript
public readonly associatedPortalArns: string[];
```

- *Type:* string[]

---

##### `networkSettingsArn`<sup>Required</sup> <a name="networkSettingsArn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.networkSettingsArn"></a>

```typescript
public readonly networkSettingsArn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.tags"></a>

```typescript
public readonly tags: DataAwsccWorkspaceswebNetworkSettingsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList">DataAwsccWorkspaceswebNetworkSettingsTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspaceswebNetworkSettingsConfig <a name="DataAwsccWorkspaceswebNetworkSettingsConfig" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebNetworkSettings } from '@cdktn/provider-awscc'

const dataAwsccWorkspaceswebNetworkSettingsConfig: dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/workspacesweb_network_settings#id DataAwsccWorkspaceswebNetworkSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspaceswebNetworkSettingsTags <a name="DataAwsccWorkspaceswebNetworkSettingsTags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTags.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebNetworkSettings } from '@cdktn/provider-awscc'

const dataAwsccWorkspaceswebNetworkSettingsTags: dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspaceswebNetworkSettingsTagsList <a name="DataAwsccWorkspaceswebNetworkSettingsTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebNetworkSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.get"></a>

```typescript
public get(index: number): DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference <a name="DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebNetworkSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTags">DataAwsccWorkspaceswebNetworkSettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWorkspaceswebNetworkSettingsTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebNetworkSettings.DataAwsccWorkspaceswebNetworkSettingsTags">DataAwsccWorkspaceswebNetworkSettingsTags</a>

---



