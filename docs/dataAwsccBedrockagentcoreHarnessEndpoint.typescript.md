# `dataAwsccBedrockagentcoreHarnessEndpoint` Submodule <a name="`dataAwsccBedrockagentcoreHarnessEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreHarnessEndpoint <a name="DataAwsccBedrockagentcoreHarnessEndpoint" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_harness_endpoint awscc_bedrockagentcore_harness_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreHarnessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint(scope: Construct, id: string, config: DataAwsccBedrockagentcoreHarnessEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig">DataAwsccBedrockagentcoreHarnessEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig">DataAwsccBedrockagentcoreHarnessEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreHarnessEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isConstruct"></a>

```typescript
import { dataAwsccBedrockagentcoreHarnessEndpoint } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockagentcoreHarnessEndpoint } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockagentcoreHarnessEndpoint } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockagentcoreHarnessEndpoint } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreHarnessEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcoreHarnessEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcoreHarnessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_harness_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreHarnessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.harnessId">harnessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.harnessName">harnessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.liveVersion">liveVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList">DataAwsccBedrockagentcoreHarnessEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `harnessId`<sup>Required</sup> <a name="harnessId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.harnessId"></a>

```typescript
public readonly harnessId: string;
```

- *Type:* string

---

##### `harnessName`<sup>Required</sup> <a name="harnessName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.harnessName"></a>

```typescript
public readonly harnessName: string;
```

- *Type:* string

---

##### `liveVersion`<sup>Required</sup> <a name="liveVersion" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.liveVersion"></a>

```typescript
public readonly liveVersion: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockagentcoreHarnessEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList">DataAwsccBedrockagentcoreHarnessEndpointTagsList</a>

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreHarnessEndpointConfig <a name="DataAwsccBedrockagentcoreHarnessEndpointConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreHarnessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreHarnessEndpointConfig: dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_harness_endpoint#id DataAwsccBedrockagentcoreHarnessEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreHarnessEndpointTags <a name="DataAwsccBedrockagentcoreHarnessEndpointTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTags.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreHarnessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreHarnessEndpointTags: dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreHarnessEndpointTagsList <a name="DataAwsccBedrockagentcoreHarnessEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreHarnessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference <a name="DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreHarnessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTags">DataAwsccBedrockagentcoreHarnessEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreHarnessEndpointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarnessEndpoint.DataAwsccBedrockagentcoreHarnessEndpointTags">DataAwsccBedrockagentcoreHarnessEndpointTags</a>

---



