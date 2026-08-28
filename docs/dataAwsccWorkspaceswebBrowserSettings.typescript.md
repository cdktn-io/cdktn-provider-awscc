# `dataAwsccWorkspaceswebBrowserSettings` Submodule <a name="`dataAwsccWorkspaceswebBrowserSettings` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspaceswebBrowserSettings <a name="DataAwsccWorkspaceswebBrowserSettings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_browser_settings awscc_workspacesweb_browser_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebBrowserSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings(scope: Construct, id: string, config: DataAwsccWorkspaceswebBrowserSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig">DataAwsccWorkspaceswebBrowserSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig">DataAwsccWorkspaceswebBrowserSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspaceswebBrowserSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isConstruct"></a>

```typescript
import { dataAwsccWorkspaceswebBrowserSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isTerraformElement"></a>

```typescript
import { dataAwsccWorkspaceswebBrowserSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isTerraformDataSource"></a>

```typescript
import { dataAwsccWorkspaceswebBrowserSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.generateConfigForImport"></a>

```typescript
import { dataAwsccWorkspaceswebBrowserSettings } from '@cdktn/provider-awscc'

dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccWorkspaceswebBrowserSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWorkspaceswebBrowserSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWorkspaceswebBrowserSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_browser_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspaceswebBrowserSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.associatedPortalArns">associatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.browserPolicy">browserPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.browserSettingsArn">browserSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList">DataAwsccWorkspaceswebBrowserSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.webContentFilteringPolicy">webContentFilteringPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference">DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `associatedPortalArns`<sup>Required</sup> <a name="associatedPortalArns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.associatedPortalArns"></a>

```typescript
public readonly associatedPortalArns: string[];
```

- *Type:* string[]

---

##### `browserPolicy`<sup>Required</sup> <a name="browserPolicy" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.browserPolicy"></a>

```typescript
public readonly browserPolicy: string;
```

- *Type:* string

---

##### `browserSettingsArn`<sup>Required</sup> <a name="browserSettingsArn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.browserSettingsArn"></a>

```typescript
public readonly browserSettingsArn: string;
```

- *Type:* string

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.tags"></a>

```typescript
public readonly tags: DataAwsccWorkspaceswebBrowserSettingsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList">DataAwsccWorkspaceswebBrowserSettingsTagsList</a>

---

##### `webContentFilteringPolicy`<sup>Required</sup> <a name="webContentFilteringPolicy" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.webContentFilteringPolicy"></a>

```typescript
public readonly webContentFilteringPolicy: DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference">DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspaceswebBrowserSettingsConfig <a name="DataAwsccWorkspaceswebBrowserSettingsConfig" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebBrowserSettings } from '@cdktn/provider-awscc'

const dataAwsccWorkspaceswebBrowserSettingsConfig: dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_browser_settings#id DataAwsccWorkspaceswebBrowserSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspaceswebBrowserSettingsTags <a name="DataAwsccWorkspaceswebBrowserSettingsTags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTags.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebBrowserSettings } from '@cdktn/provider-awscc'

const dataAwsccWorkspaceswebBrowserSettingsTags: dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTags = { ... }
```


### DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicy <a name="DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicy" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicy.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebBrowserSettings } from '@cdktn/provider-awscc'

const dataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicy: dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicy = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspaceswebBrowserSettingsTagsList <a name="DataAwsccWorkspaceswebBrowserSettingsTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebBrowserSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.get"></a>

```typescript
public get(index: number): DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference <a name="DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebBrowserSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTags">DataAwsccWorkspaceswebBrowserSettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWorkspaceswebBrowserSettingsTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsTags">DataAwsccWorkspaceswebBrowserSettingsTags</a>

---


### DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference <a name="DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccWorkspaceswebBrowserSettings } from '@cdktn/provider-awscc'

new dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.allowedUrls">allowedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedCategories">blockedCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedUrls">blockedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicy">DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedUrls`<sup>Required</sup> <a name="allowedUrls" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.allowedUrls"></a>

```typescript
public readonly allowedUrls: string[];
```

- *Type:* string[]

---

##### `blockedCategories`<sup>Required</sup> <a name="blockedCategories" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedCategories"></a>

```typescript
public readonly blockedCategories: string[];
```

- *Type:* string[]

---

##### `blockedUrls`<sup>Required</sup> <a name="blockedUrls" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedUrls"></a>

```typescript
public readonly blockedUrls: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettings.DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicy">DataAwsccWorkspaceswebBrowserSettingsWebContentFilteringPolicy</a>

---



