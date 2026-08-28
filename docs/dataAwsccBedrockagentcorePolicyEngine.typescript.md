# `dataAwsccBedrockagentcorePolicyEngine` Submodule <a name="`dataAwsccBedrockagentcorePolicyEngine` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcorePolicyEngine <a name="DataAwsccBedrockagentcorePolicyEngine" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_policy_engine awscc_bedrockagentcore_policy_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePolicyEngine } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine(scope: Construct, id: string, config: DataAwsccBedrockagentcorePolicyEngineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig">DataAwsccBedrockagentcorePolicyEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig">DataAwsccBedrockagentcorePolicyEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcorePolicyEngine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isConstruct"></a>

```typescript
import { dataAwsccBedrockagentcorePolicyEngine } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockagentcorePolicyEngine } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockagentcorePolicyEngine } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockagentcorePolicyEngine } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcorePolicyEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcorePolicyEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcorePolicyEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_policy_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcorePolicyEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.policyEngineArn">policyEngineArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.statusReasons">statusReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList">DataAwsccBedrockagentcorePolicyEngineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.policyEngineArn"></a>

```typescript
public readonly policyEngineArn: string;
```

- *Type:* string

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReasons`<sup>Required</sup> <a name="statusReasons" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.statusReasons"></a>

```typescript
public readonly statusReasons: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockagentcorePolicyEngineTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList">DataAwsccBedrockagentcorePolicyEngineTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcorePolicyEngineConfig <a name="DataAwsccBedrockagentcorePolicyEngineConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePolicyEngine } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePolicyEngineConfig: dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_policy_engine#id DataAwsccBedrockagentcorePolicyEngine#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcorePolicyEngineTags <a name="DataAwsccBedrockagentcorePolicyEngineTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTags.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePolicyEngine } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePolicyEngineTags: dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcorePolicyEngineTagsList <a name="DataAwsccBedrockagentcorePolicyEngineTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePolicyEngine } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcorePolicyEngineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcorePolicyEngineTagsOutputReference <a name="DataAwsccBedrockagentcorePolicyEngineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePolicyEngine } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTags">DataAwsccBedrockagentcorePolicyEngineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePolicyEngineTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePolicyEngine.DataAwsccBedrockagentcorePolicyEngineTags">DataAwsccBedrockagentcorePolicyEngineTags</a>

---



