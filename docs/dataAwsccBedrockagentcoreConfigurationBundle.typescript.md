# `dataAwsccBedrockagentcoreConfigurationBundle` Submodule <a name="`dataAwsccBedrockagentcoreConfigurationBundle` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreConfigurationBundle <a name="DataAwsccBedrockagentcoreConfigurationBundle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_configuration_bundle awscc_bedrockagentcore_configuration_bundle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle(scope: Construct, id: string, config: DataAwsccBedrockagentcoreConfigurationBundleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig">DataAwsccBedrockagentcoreConfigurationBundleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig">DataAwsccBedrockagentcoreConfigurationBundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreConfigurationBundle resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isConstruct"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreConfigurationBundle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcoreConfigurationBundle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcoreConfigurationBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_configuration_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreConfigurationBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.bundleArn">bundleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.bundleName">bundleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.commitMessage">commitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.components">components</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap">DataAwsccBedrockagentcoreConfigurationBundleComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference">DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.lineageMetadata">lineageMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference">DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList">DataAwsccBedrockagentcoreConfigurationBundleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `bundleArn`<sup>Required</sup> <a name="bundleArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.bundleArn"></a>

```typescript
public readonly bundleArn: string;
```

- *Type:* string

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `bundleName`<sup>Required</sup> <a name="bundleName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.bundleName"></a>

```typescript
public readonly bundleName: string;
```

- *Type:* string

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.commitMessage"></a>

```typescript
public readonly commitMessage: string;
```

- *Type:* string

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.components"></a>

```typescript
public readonly components: DataAwsccBedrockagentcoreConfigurationBundleComponentsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap">DataAwsccBedrockagentcoreConfigurationBundleComponentsMap</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.createdBy"></a>

```typescript
public readonly createdBy: DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference">DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `lineageMetadata`<sup>Required</sup> <a name="lineageMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.lineageMetadata"></a>

```typescript
public readonly lineageMetadata: DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference">DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockagentcoreConfigurationBundleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList">DataAwsccBedrockagentcoreConfigurationBundleTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundle.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreConfigurationBundleComponents <a name="DataAwsccBedrockagentcoreConfigurationBundleComponents" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponents.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreConfigurationBundleComponents: dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponents = { ... }
```


### DataAwsccBedrockagentcoreConfigurationBundleConfig <a name="DataAwsccBedrockagentcoreConfigurationBundleConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreConfigurationBundleConfig: dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_configuration_bundle#id DataAwsccBedrockagentcoreConfigurationBundle#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreConfigurationBundleCreatedBy <a name="DataAwsccBedrockagentcoreConfigurationBundleCreatedBy" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedBy.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreConfigurationBundleCreatedBy: dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedBy = { ... }
```


### DataAwsccBedrockagentcoreConfigurationBundleLineageMetadata <a name="DataAwsccBedrockagentcoreConfigurationBundleLineageMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadata.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreConfigurationBundleLineageMetadata: dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadata = { ... }
```


### DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedBy <a name="DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedBy" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedBy.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedBy: dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedBy = { ... }
```


### DataAwsccBedrockagentcoreConfigurationBundleTags <a name="DataAwsccBedrockagentcoreConfigurationBundleTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTags.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreConfigurationBundleTags: dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreConfigurationBundleComponentsMap <a name="DataAwsccBedrockagentcoreConfigurationBundleComponentsMap" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.get"></a>

```typescript
public get(key: string): DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference <a name="DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponents">DataAwsccBedrockagentcoreConfigurationBundleComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreConfigurationBundleComponents;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleComponents">DataAwsccBedrockagentcoreConfigurationBundleComponents</a>

---


### DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference <a name="DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedBy">DataAwsccBedrockagentcoreConfigurationBundleCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreConfigurationBundleCreatedBy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleCreatedBy">DataAwsccBedrockagentcoreConfigurationBundleCreatedBy</a>

---


### DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference <a name="DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedBy">DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedBy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedBy">DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedBy</a>

---


### DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference <a name="DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.commitMessage">commitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference">DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.parentVersionIds">parentVersionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadata">DataAwsccBedrockagentcoreConfigurationBundleLineageMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.commitMessage"></a>

```typescript
public readonly commitMessage: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference">DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference</a>

---

##### `parentVersionIds`<sup>Required</sup> <a name="parentVersionIds" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.parentVersionIds"></a>

```typescript
public readonly parentVersionIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreConfigurationBundleLineageMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleLineageMetadata">DataAwsccBedrockagentcoreConfigurationBundleLineageMetadata</a>

---


### DataAwsccBedrockagentcoreConfigurationBundleTagsList <a name="DataAwsccBedrockagentcoreConfigurationBundleTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference <a name="DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreConfigurationBundle } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTags">DataAwsccBedrockagentcoreConfigurationBundleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreConfigurationBundleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreConfigurationBundle.DataAwsccBedrockagentcoreConfigurationBundleTags">DataAwsccBedrockagentcoreConfigurationBundleTags</a>

---



