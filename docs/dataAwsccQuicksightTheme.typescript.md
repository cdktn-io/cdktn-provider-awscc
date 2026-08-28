# `dataAwsccQuicksightTheme` Submodule <a name="`dataAwsccQuicksightTheme` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightTheme <a name="DataAwsccQuicksightTheme" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_theme awscc_quicksight_theme}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightTheme(scope: Construct, id: string, config: DataAwsccQuicksightThemeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig">DataAwsccQuicksightThemeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig">DataAwsccQuicksightThemeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightTheme resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isConstruct"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformElement"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformDataSource"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccQuicksightTheme resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightTheme to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightTheme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_theme#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightTheme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.baseThemeId">baseThemeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference">DataAwsccQuicksightThemeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList">DataAwsccQuicksightThemePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList">DataAwsccQuicksightThemeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.themeId">themeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.version">version</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference">DataAwsccQuicksightThemeVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.versionDescription">versionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `baseThemeId`<sup>Required</sup> <a name="baseThemeId" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.baseThemeId"></a>

```typescript
public readonly baseThemeId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccQuicksightThemeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference">DataAwsccQuicksightThemeConfigurationOutputReference</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.permissions"></a>

```typescript
public readonly permissions: DataAwsccQuicksightThemePermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList">DataAwsccQuicksightThemePermissionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.tags"></a>

```typescript
public readonly tags: DataAwsccQuicksightThemeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList">DataAwsccQuicksightThemeTagsList</a>

---

##### `themeId`<sup>Required</sup> <a name="themeId" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.themeId"></a>

```typescript
public readonly themeId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.version"></a>

```typescript
public readonly version: DataAwsccQuicksightThemeVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference">DataAwsccQuicksightThemeVersionOutputReference</a>

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightThemeConfig <a name="DataAwsccQuicksightThemeConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfig: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_theme#id DataAwsccQuicksightTheme#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightThemeConfiguration <a name="DataAwsccQuicksightThemeConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfiguration.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfiguration: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfiguration = { ... }
```


### DataAwsccQuicksightThemeConfigurationDataColorPalette <a name="DataAwsccQuicksightThemeConfigurationDataColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPalette.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfigurationDataColorPalette: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPalette = { ... }
```


### DataAwsccQuicksightThemeConfigurationSheet <a name="DataAwsccQuicksightThemeConfigurationSheet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheet.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfigurationSheet: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheet = { ... }
```


### DataAwsccQuicksightThemeConfigurationSheetTile <a name="DataAwsccQuicksightThemeConfigurationSheetTile" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTile.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfigurationSheetTile: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTile = { ... }
```


### DataAwsccQuicksightThemeConfigurationSheetTileBorder <a name="DataAwsccQuicksightThemeConfigurationSheetTileBorder" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorder.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfigurationSheetTileBorder: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorder = { ... }
```


### DataAwsccQuicksightThemeConfigurationSheetTileLayout <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayout" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayout.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfigurationSheetTileLayout: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayout = { ... }
```


### DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter = { ... }
```


### DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin = { ... }
```


### DataAwsccQuicksightThemeConfigurationTypography <a name="DataAwsccQuicksightThemeConfigurationTypography" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypography.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfigurationTypography: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypography = { ... }
```


### DataAwsccQuicksightThemeConfigurationTypographyFontFamilies <a name="DataAwsccQuicksightThemeConfigurationTypographyFontFamilies" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfigurationTypographyFontFamilies: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies = { ... }
```


### DataAwsccQuicksightThemeConfigurationUiColorPalette <a name="DataAwsccQuicksightThemeConfigurationUiColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPalette.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeConfigurationUiColorPalette: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPalette = { ... }
```


### DataAwsccQuicksightThemePermissions <a name="DataAwsccQuicksightThemePermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissions.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemePermissions: dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissions = { ... }
```


### DataAwsccQuicksightThemeTags <a name="DataAwsccQuicksightThemeTags" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTags.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeTags: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTags = { ... }
```


### DataAwsccQuicksightThemeVersion <a name="DataAwsccQuicksightThemeVersion" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersion.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersion: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersion = { ... }
```


### DataAwsccQuicksightThemeVersionConfiguration <a name="DataAwsccQuicksightThemeVersionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfiguration.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionConfiguration: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfiguration = { ... }
```


### DataAwsccQuicksightThemeVersionConfigurationDataColorPalette <a name="DataAwsccQuicksightThemeVersionConfigurationDataColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionConfigurationDataColorPalette: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette = { ... }
```


### DataAwsccQuicksightThemeVersionConfigurationSheet <a name="DataAwsccQuicksightThemeVersionConfigurationSheet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheet.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionConfigurationSheet: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheet = { ... }
```


### DataAwsccQuicksightThemeVersionConfigurationSheetTile <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTile" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTile.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionConfigurationSheetTile: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTile = { ... }
```


### DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionConfigurationSheetTileBorder: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder = { ... }
```


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionConfigurationSheetTileLayout: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout = { ... }
```


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter = { ... }
```


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin = { ... }
```


### DataAwsccQuicksightThemeVersionConfigurationTypography <a name="DataAwsccQuicksightThemeVersionConfigurationTypography" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypography.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionConfigurationTypography: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypography = { ... }
```


### DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies <a name="DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies = { ... }
```


### DataAwsccQuicksightThemeVersionConfigurationUiColorPalette <a name="DataAwsccQuicksightThemeVersionConfigurationUiColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionConfigurationUiColorPalette: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette = { ... }
```


### DataAwsccQuicksightThemeVersionErrors <a name="DataAwsccQuicksightThemeVersionErrors" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrors.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

const dataAwsccQuicksightThemeVersionErrors: dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrors = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference <a name="DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors">colors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor">emptyFillColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient">minMaxGradient</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPalette">DataAwsccQuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `colors`<sup>Required</sup> <a name="colors" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors"></a>

```typescript
public readonly colors: string[];
```

- *Type:* string[]

---

##### `emptyFillColor`<sup>Required</sup> <a name="emptyFillColor" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```typescript
public readonly emptyFillColor: string;
```

- *Type:* string

---

##### `minMaxGradient`<sup>Required</sup> <a name="minMaxGradient" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```typescript
public readonly minMaxGradient: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeConfigurationDataColorPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPalette">DataAwsccQuicksightThemeConfigurationDataColorPalette</a>

---


### DataAwsccQuicksightThemeConfigurationOutputReference <a name="DataAwsccQuicksightThemeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.dataColorPalette">dataColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference">DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.sheet">sheet</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference">DataAwsccQuicksightThemeConfigurationSheetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference">DataAwsccQuicksightThemeConfigurationTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.uiColorPalette">uiColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference">DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfiguration">DataAwsccQuicksightThemeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataColorPalette`<sup>Required</sup> <a name="dataColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.dataColorPalette"></a>

```typescript
public readonly dataColorPalette: DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference">DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference</a>

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.sheet"></a>

```typescript
public readonly sheet: DataAwsccQuicksightThemeConfigurationSheetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference">DataAwsccQuicksightThemeConfigurationSheetOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.typography"></a>

```typescript
public readonly typography: DataAwsccQuicksightThemeConfigurationTypographyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference">DataAwsccQuicksightThemeConfigurationTypographyOutputReference</a>

---

##### `uiColorPalette`<sup>Required</sup> <a name="uiColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.uiColorPalette"></a>

```typescript
public readonly uiColorPalette: DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference">DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfiguration">DataAwsccQuicksightThemeConfiguration</a>

---


### DataAwsccQuicksightThemeConfigurationSheetOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.tile">tile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.tileLayout">tileLayout</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheet">DataAwsccQuicksightThemeConfigurationSheet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tile`<sup>Required</sup> <a name="tile" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.tile"></a>

```typescript
public readonly tile: DataAwsccQuicksightThemeConfigurationSheetTileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileOutputReference</a>

---

##### `tileLayout`<sup>Required</sup> <a name="tileLayout" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.tileLayout"></a>

```typescript
public readonly tileLayout: DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeConfigurationSheet;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheet">DataAwsccQuicksightThemeConfigurationSheet</a>

---


### DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorder">DataAwsccQuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeConfigurationSheetTileBorder;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorder">DataAwsccQuicksightThemeConfigurationSheetTileBorder</a>

---


### DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter">DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter">DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter</a>

---


### DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin">DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin">DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin</a>

---


### DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter">gutter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin">margin</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayout">DataAwsccQuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gutter`<sup>Required</sup> <a name="gutter" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```typescript
public readonly gutter: DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a>

---

##### `margin`<sup>Required</sup> <a name="margin" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```typescript
public readonly margin: DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeConfigurationSheetTileLayout;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayout">DataAwsccQuicksightThemeConfigurationSheetTileLayout</a>

---


### DataAwsccQuicksightThemeConfigurationSheetTileOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetTileOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.border">border</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTile">DataAwsccQuicksightThemeConfigurationSheetTile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `border`<sup>Required</sup> <a name="border" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.border"></a>

```typescript
public readonly border: DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeConfigurationSheetTile;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTile">DataAwsccQuicksightThemeConfigurationSheetTile</a>

---


### DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList <a name="DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference <a name="DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">fontFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies">DataAwsccQuicksightThemeConfigurationTypographyFontFamilies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```typescript
public readonly fontFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeConfigurationTypographyFontFamilies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies">DataAwsccQuicksightThemeConfigurationTypographyFontFamilies</a>

---


### DataAwsccQuicksightThemeConfigurationTypographyOutputReference <a name="DataAwsccQuicksightThemeConfigurationTypographyOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies">fontFamilies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList">DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypography">DataAwsccQuicksightThemeConfigurationTypography</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamilies`<sup>Required</sup> <a name="fontFamilies" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies"></a>

```typescript
public readonly fontFamilies: DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList">DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeConfigurationTypography;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypography">DataAwsccQuicksightThemeConfigurationTypography</a>

---


### DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference <a name="DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent">accent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground">accentForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger">danger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground">dangerForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension">dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground">dimensionForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure">measure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground">measureForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground">primaryBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground">primaryForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground">secondaryBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground">secondaryForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.success">success</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground">successForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning">warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground">warningForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPalette">DataAwsccQuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accent`<sup>Required</sup> <a name="accent" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent"></a>

```typescript
public readonly accent: string;
```

- *Type:* string

---

##### `accentForeground`<sup>Required</sup> <a name="accentForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```typescript
public readonly accentForeground: string;
```

- *Type:* string

---

##### `danger`<sup>Required</sup> <a name="danger" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger"></a>

```typescript
public readonly danger: string;
```

- *Type:* string

---

##### `dangerForeground`<sup>Required</sup> <a name="dangerForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```typescript
public readonly dangerForeground: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

---

##### `dimensionForeground`<sup>Required</sup> <a name="dimensionForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```typescript
public readonly dimensionForeground: string;
```

- *Type:* string

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure"></a>

```typescript
public readonly measure: string;
```

- *Type:* string

---

##### `measureForeground`<sup>Required</sup> <a name="measureForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```typescript
public readonly measureForeground: string;
```

- *Type:* string

---

##### `primaryBackground`<sup>Required</sup> <a name="primaryBackground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```typescript
public readonly primaryBackground: string;
```

- *Type:* string

---

##### `primaryForeground`<sup>Required</sup> <a name="primaryForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```typescript
public readonly primaryForeground: string;
```

- *Type:* string

---

##### `secondaryBackground`<sup>Required</sup> <a name="secondaryBackground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```typescript
public readonly secondaryBackground: string;
```

- *Type:* string

---

##### `secondaryForeground`<sup>Required</sup> <a name="secondaryForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```typescript
public readonly secondaryForeground: string;
```

- *Type:* string

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.success"></a>

```typescript
public readonly success: string;
```

- *Type:* string

---

##### `successForeground`<sup>Required</sup> <a name="successForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```typescript
public readonly successForeground: string;
```

- *Type:* string

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

---

##### `warningForeground`<sup>Required</sup> <a name="warningForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```typescript
public readonly warningForeground: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeConfigurationUiColorPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPalette">DataAwsccQuicksightThemeConfigurationUiColorPalette</a>

---


### DataAwsccQuicksightThemePermissionsList <a name="DataAwsccQuicksightThemePermissionsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightThemePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightThemePermissionsOutputReference <a name="DataAwsccQuicksightThemePermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissions">DataAwsccQuicksightThemePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemePermissions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissions">DataAwsccQuicksightThemePermissions</a>

---


### DataAwsccQuicksightThemeTagsList <a name="DataAwsccQuicksightThemeTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightThemeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightThemeTagsOutputReference <a name="DataAwsccQuicksightThemeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTags">DataAwsccQuicksightThemeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTags">DataAwsccQuicksightThemeTags</a>

---


### DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.colors">colors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.emptyFillColor">emptyFillColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.minMaxGradient">minMaxGradient</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette">DataAwsccQuicksightThemeVersionConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `colors`<sup>Required</sup> <a name="colors" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.colors"></a>

```typescript
public readonly colors: string[];
```

- *Type:* string[]

---

##### `emptyFillColor`<sup>Required</sup> <a name="emptyFillColor" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```typescript
public readonly emptyFillColor: string;
```

- *Type:* string

---

##### `minMaxGradient`<sup>Required</sup> <a name="minMaxGradient" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```typescript
public readonly minMaxGradient: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionConfigurationDataColorPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette">DataAwsccQuicksightThemeVersionConfigurationDataColorPalette</a>

---


### DataAwsccQuicksightThemeVersionConfigurationOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.dataColorPalette">dataColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference">DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.sheet">sheet</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference">DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.uiColorPalette">uiColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference">DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfiguration">DataAwsccQuicksightThemeVersionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataColorPalette`<sup>Required</sup> <a name="dataColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.dataColorPalette"></a>

```typescript
public readonly dataColorPalette: DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference">DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference</a>

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.sheet"></a>

```typescript
public readonly sheet: DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.typography"></a>

```typescript
public readonly typography: DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference">DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference</a>

---

##### `uiColorPalette`<sup>Required</sup> <a name="uiColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.uiColorPalette"></a>

```typescript
public readonly uiColorPalette: DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference">DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfiguration">DataAwsccQuicksightThemeVersionConfiguration</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.tile">tile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.tileLayout">tileLayout</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheet">DataAwsccQuicksightThemeVersionConfigurationSheet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tile`<sup>Required</sup> <a name="tile" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.tile"></a>

```typescript
public readonly tile: DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference</a>

---

##### `tileLayout`<sup>Required</sup> <a name="tileLayout" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.tileLayout"></a>

```typescript
public readonly tileLayout: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionConfigurationSheet;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheet">DataAwsccQuicksightThemeVersionConfigurationSheet</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder">DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder">DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.gutter">gutter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.margin">margin</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gutter`<sup>Required</sup> <a name="gutter" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```typescript
public readonly gutter: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference</a>

---

##### `margin`<sup>Required</sup> <a name="margin" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```typescript
public readonly margin: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.border">border</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTile">DataAwsccQuicksightThemeVersionConfigurationSheetTile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `border`<sup>Required</sup> <a name="border" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.border"></a>

```typescript
public readonly border: DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionConfigurationSheetTile;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTile">DataAwsccQuicksightThemeVersionConfigurationSheetTile</a>

---


### DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList <a name="DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">fontFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies">DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```typescript
public readonly fontFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies">DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies</a>

---


### DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.fontFamilies">fontFamilies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList">DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypography">DataAwsccQuicksightThemeVersionConfigurationTypography</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamilies`<sup>Required</sup> <a name="fontFamilies" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.fontFamilies"></a>

```typescript
public readonly fontFamilies: DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList">DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionConfigurationTypography;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypography">DataAwsccQuicksightThemeVersionConfigurationTypography</a>

---


### DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accent">accent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accentForeground">accentForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.danger">danger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dangerForeground">dangerForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimension">dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimensionForeground">dimensionForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measure">measure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measureForeground">measureForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryBackground">primaryBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryForeground">primaryForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryBackground">secondaryBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryForeground">secondaryForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.success">success</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.successForeground">successForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warning">warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warningForeground">warningForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette">DataAwsccQuicksightThemeVersionConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accent`<sup>Required</sup> <a name="accent" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accent"></a>

```typescript
public readonly accent: string;
```

- *Type:* string

---

##### `accentForeground`<sup>Required</sup> <a name="accentForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```typescript
public readonly accentForeground: string;
```

- *Type:* string

---

##### `danger`<sup>Required</sup> <a name="danger" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.danger"></a>

```typescript
public readonly danger: string;
```

- *Type:* string

---

##### `dangerForeground`<sup>Required</sup> <a name="dangerForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```typescript
public readonly dangerForeground: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

---

##### `dimensionForeground`<sup>Required</sup> <a name="dimensionForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```typescript
public readonly dimensionForeground: string;
```

- *Type:* string

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measure"></a>

```typescript
public readonly measure: string;
```

- *Type:* string

---

##### `measureForeground`<sup>Required</sup> <a name="measureForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```typescript
public readonly measureForeground: string;
```

- *Type:* string

---

##### `primaryBackground`<sup>Required</sup> <a name="primaryBackground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```typescript
public readonly primaryBackground: string;
```

- *Type:* string

---

##### `primaryForeground`<sup>Required</sup> <a name="primaryForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```typescript
public readonly primaryForeground: string;
```

- *Type:* string

---

##### `secondaryBackground`<sup>Required</sup> <a name="secondaryBackground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```typescript
public readonly secondaryBackground: string;
```

- *Type:* string

---

##### `secondaryForeground`<sup>Required</sup> <a name="secondaryForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```typescript
public readonly secondaryForeground: string;
```

- *Type:* string

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.success"></a>

```typescript
public readonly success: string;
```

- *Type:* string

---

##### `successForeground`<sup>Required</sup> <a name="successForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```typescript
public readonly successForeground: string;
```

- *Type:* string

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

---

##### `warningForeground`<sup>Required</sup> <a name="warningForeground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```typescript
public readonly warningForeground: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionConfigurationUiColorPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette">DataAwsccQuicksightThemeVersionConfigurationUiColorPalette</a>

---


### DataAwsccQuicksightThemeVersionErrorsList <a name="DataAwsccQuicksightThemeVersionErrorsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightThemeVersionErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightThemeVersionErrorsOutputReference <a name="DataAwsccQuicksightThemeVersionErrorsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrors">DataAwsccQuicksightThemeVersionErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersionErrors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrors">DataAwsccQuicksightThemeVersionErrors</a>

---


### DataAwsccQuicksightThemeVersionOutputReference <a name="DataAwsccQuicksightThemeVersionOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTheme } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.baseThemeId">baseThemeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference">DataAwsccQuicksightThemeVersionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList">DataAwsccQuicksightThemeVersionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersion">DataAwsccQuicksightThemeVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `baseThemeId`<sup>Required</sup> <a name="baseThemeId" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.baseThemeId"></a>

```typescript
public readonly baseThemeId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccQuicksightThemeVersionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference">DataAwsccQuicksightThemeVersionConfigurationOutputReference</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.errors"></a>

```typescript
public readonly errors: DataAwsccQuicksightThemeVersionErrorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList">DataAwsccQuicksightThemeVersionErrorsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.versionNumber"></a>

```typescript
public readonly versionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightThemeVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersion">DataAwsccQuicksightThemeVersion</a>

---



