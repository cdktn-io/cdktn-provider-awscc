# `dataAwsccBedrockagentcoreCapacityProvider` Submodule <a name="`dataAwsccBedrockagentcoreCapacityProvider` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreCapacityProvider <a name="DataAwsccBedrockagentcoreCapacityProvider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_capacity_provider awscc_bedrockagentcore_capacity_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider(scope: Construct, id: string, config: DataAwsccBedrockagentcoreCapacityProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig">DataAwsccBedrockagentcoreCapacityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig">DataAwsccBedrockagentcoreCapacityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreCapacityProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isConstruct"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreCapacityProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcoreCapacityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcoreCapacityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_capacity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreCapacityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.capacityProviderId">capacityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.computeConfiguration">computeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.permissionsConfiguration">permissionsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList">DataAwsccBedrockagentcoreCapacityProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityProviderId`<sup>Required</sup> <a name="capacityProviderId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.capacityProviderId"></a>

```typescript
public readonly capacityProviderId: string;
```

- *Type:* string

---

##### `computeConfiguration`<sup>Required</sup> <a name="computeConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.computeConfiguration"></a>

```typescript
public readonly computeConfiguration: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissionsConfiguration`<sup>Required</sup> <a name="permissionsConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.permissionsConfiguration"></a>

```typescript
public readonly permissionsConfiguration: DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockagentcoreCapacityProviderTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList">DataAwsccBedrockagentcoreCapacityProviderTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfiguration: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderConfig <a name="DataAwsccBedrockagentcoreCapacityProviderConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderConfig: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_capacity_provider#id DataAwsccBedrockagentcoreCapacityProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration <a name="DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration = { ... }
```


### DataAwsccBedrockagentcoreCapacityProviderTags <a name="DataAwsccBedrockagentcoreCapacityProviderTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTags.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCapacityProviderTags: dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `capacityReservationResourceGroupArn`<sup>Required</sup> <a name="capacityReservationResourceGroupArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```typescript
public readonly capacityReservationResourceGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.ebsCardIndex">ebsCardIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeInitializationRate">volumeInitializationRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsCardIndex`<sup>Required</sup> <a name="ebsCardIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.ebsCardIndex"></a>

```typescript
public readonly ebsCardIndex: number;
```

- *Type:* number

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeInitializationRate`<sup>Required</sup> <a name="volumeInitializationRate" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeInitializationRate"></a>

```typescript
public readonly volumeInitializationRate: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.ebs"></a>

```typescript
public readonly ebs: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference</a>

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedInstanceTypes`<sup>Required</sup> <a name="allowedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```typescript
public readonly allowedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseConfigurationArn`<sup>Required</sup> <a name="licenseConfigurationArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```typescript
public readonly licenseConfigurationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.ephemeralVolumes">ephemeralVolumes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.licenseSpecifications">licenseSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.monitoring">monitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.propagatedTags">propagatedTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.sshKeyName">sshKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference</a>

---

##### `ephemeralVolumes`<sup>Required</sup> <a name="ephemeralVolumes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.ephemeralVolumes"></a>

```typescript
public readonly ephemeralVolumes: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList</a>

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceRequirements"></a>

```typescript
public readonly instanceRequirements: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference</a>

---

##### `licenseSpecifications`<sup>Required</sup> <a name="licenseSpecifications" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.monitoring"></a>

```typescript
public readonly monitoring: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `propagatedTags`<sup>Required</sup> <a name="propagatedTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.propagatedTags"></a>

```typescript
public readonly propagatedTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `sshKeyName`<sup>Required</sup> <a name="sshKeyName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.sshKeyName"></a>

```typescript
public readonly sshKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.launchParameters">launchParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchParameters`<sup>Required</sup> <a name="launchParameters" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.launchParameters"></a>

```typescript
public readonly launchParameters: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.idleInstanceTimeout">idleInstanceTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.maxLifetime">maxLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleInstanceTimeout`<sup>Required</sup> <a name="idleInstanceTimeout" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.idleInstanceTimeout"></a>

```typescript
public readonly idleInstanceTimeout: number;
```

- *Type:* number

---

##### `maxLifetime`<sup>Required</sup> <a name="maxLifetime" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.maxLifetime"></a>

```typescript
public readonly maxLifetime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.launchTemplateSource">launchTemplateSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateSource`<sup>Required</sup> <a name="launchTemplateSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.launchTemplateSource"></a>

```typescript
public readonly launchTemplateSource: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference</a>

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.rootVolume"></a>

```typescript
public readonly rootVolume: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.volumes"></a>

```typescript
public readonly volumes: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.freeSpaceGiB">freeSpaceGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `freeSpaceGiB`<sup>Required</sup> <a name="freeSpaceGiB" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.freeSpaceGiB"></a>

```typescript
public readonly freeSpaceGiB: number;
```

- *Type:* number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.sizeGiB">sizeGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sizeGiB`<sup>Required</sup> <a name="sizeGiB" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.sizeGiB"></a>

```typescript
public readonly sizeGiB: number;
```

- *Type:* number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.ebsConfiguration">ebsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsConfiguration`<sup>Required</sup> <a name="ebsConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.ebsConfiguration"></a>

```typescript
public readonly ebsConfiguration: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration</a>

---


### DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.ec2Configuration">ec2Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration">DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ec2Configuration`<sup>Required</sup> <a name="ec2Configuration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.ec2Configuration"></a>

```typescript
public readonly ec2Configuration: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference">DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration">DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration</a>

---


### DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.capacityProviderOperatorRoleArn">capacityProviderOperatorRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration">DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityProviderOperatorRoleArn`<sup>Required</sup> <a name="capacityProviderOperatorRoleArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.capacityProviderOperatorRoleArn"></a>

```typescript
public readonly capacityProviderOperatorRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration">DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration</a>

---


### DataAwsccBedrockagentcoreCapacityProviderTagsList <a name="DataAwsccBedrockagentcoreCapacityProviderTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference <a name="DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCapacityProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTags">DataAwsccBedrockagentcoreCapacityProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCapacityProviderTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCapacityProvider.DataAwsccBedrockagentcoreCapacityProviderTags">DataAwsccBedrockagentcoreCapacityProviderTags</a>

---



