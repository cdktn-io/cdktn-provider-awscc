# `dataAwsccSsmquicksetupConfigurationManager` Submodule <a name="`dataAwsccSsmquicksetupConfigurationManager` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmquicksetupConfigurationManager <a name="DataAwsccSsmquicksetupConfigurationManager" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ssmquicksetup_configuration_manager awscc_ssmquicksetup_configuration_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

new dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager(scope: Construct, id: string, config: DataAwsccSsmquicksetupConfigurationManagerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig">DataAwsccSsmquicksetupConfigurationManagerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig">DataAwsccSsmquicksetupConfigurationManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmquicksetupConfigurationManager resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isConstruct"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformElement"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformDataSource"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSsmquicksetupConfigurationManager resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsmquicksetupConfigurationManager to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsmquicksetupConfigurationManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ssmquicksetup_configuration_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmquicksetupConfigurationManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.configurationDefinitions">configurationDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lastModifiedAt">lastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.managerArn">managerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.statusSummaries">statusSummaries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList">DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `configurationDefinitions`<sup>Required</sup> <a name="configurationDefinitions" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.configurationDefinitions"></a>

```typescript
public readonly configurationDefinitions: DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lastModifiedAt"></a>

```typescript
public readonly lastModifiedAt: string;
```

- *Type:* string

---

##### `managerArn`<sup>Required</sup> <a name="managerArn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.managerArn"></a>

```typescript
public readonly managerArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `statusSummaries`<sup>Required</sup> <a name="statusSummaries" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.statusSummaries"></a>

```typescript
public readonly statusSummaries: DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList">DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmquicksetupConfigurationManagerConfig <a name="DataAwsccSsmquicksetupConfigurationManagerConfig" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.Initializer"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

const dataAwsccSsmquicksetupConfigurationManagerConfig: dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ssmquicksetup_configuration_manager#id DataAwsccSsmquicksetupConfigurationManager#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions <a name="DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions.Initializer"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

const dataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions: dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions = { ... }
```


### DataAwsccSsmquicksetupConfigurationManagerStatusSummaries <a name="DataAwsccSsmquicksetupConfigurationManagerStatusSummaries" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries.Initializer"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

const dataAwsccSsmquicksetupConfigurationManagerStatusSummaries: dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList <a name="DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

new dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.get"></a>

```typescript
public get(index: number): DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference <a name="DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

new dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArn">localDeploymentAdministrationRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleName">localDeploymentExecutionRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parameters">parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersion">typeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localDeploymentAdministrationRoleArn`<sup>Required</sup> <a name="localDeploymentAdministrationRoleArn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArn"></a>

```typescript
public readonly localDeploymentAdministrationRoleArn: string;
```

- *Type:* string

---

##### `localDeploymentExecutionRoleName`<sup>Required</sup> <a name="localDeploymentExecutionRoleName" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleName"></a>

```typescript
public readonly localDeploymentExecutionRoleName: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeVersion`<sup>Required</sup> <a name="typeVersion" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersion"></a>

```typescript
public readonly typeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions</a>

---


### DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList <a name="DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

new dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.get"></a>

```typescript
public get(index: number): DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference <a name="DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmquicksetupConfigurationManager } from '@cdktn/provider-awscc'

new dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusDetails">statusDetails</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType">statusType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries">DataAwsccSsmquicksetupConfigurationManagerStatusSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusDetails"></a>

```typescript
public readonly statusDetails: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `statusType`<sup>Required</sup> <a name="statusType" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType"></a>

```typescript
public readonly statusType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmquicksetupConfigurationManagerStatusSummaries;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries">DataAwsccSsmquicksetupConfigurationManagerStatusSummaries</a>

---



