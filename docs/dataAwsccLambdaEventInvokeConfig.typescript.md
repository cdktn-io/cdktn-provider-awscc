# `dataAwsccLambdaEventInvokeConfig` Submodule <a name="`dataAwsccLambdaEventInvokeConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaEventInvokeConfig <a name="DataAwsccLambdaEventInvokeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_event_invoke_config awscc_lambda_event_invoke_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig(scope: Construct, id: string, config: DataAwsccLambdaEventInvokeConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig">DataAwsccLambdaEventInvokeConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig">DataAwsccLambdaEventInvokeConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isConstruct"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformElement"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLambdaEventInvokeConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLambdaEventInvokeConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_event_invoke_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaEventInvokeConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `destinationConfig`<sup>Required</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.destinationConfig"></a>

```typescript
public readonly destinationConfig: DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference</a>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaEventInvokeConfigConfig <a name="DataAwsccLambdaEventInvokeConfigConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventInvokeConfigConfig: dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_event_invoke_config#id DataAwsccLambdaEventInvokeConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaEventInvokeConfigDestinationConfig <a name="DataAwsccLambdaEventInvokeConfigDestinationConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventInvokeConfigDestinationConfig: dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfig = { ... }
```


### DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure <a name="DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure: dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure = { ... }
```


### DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess <a name="DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess: dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference <a name="DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure">DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure">DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure</a>

---


### DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference <a name="DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess">DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess">DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---


### DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference <a name="DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventInvokeConfig } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfig">DataAwsccLambdaEventInvokeConfigDestinationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a>

---

##### `onSuccess`<sup>Required</sup> <a name="onSuccess" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess"></a>

```typescript
public readonly onSuccess: DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventInvokeConfigDestinationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfig">DataAwsccLambdaEventInvokeConfigDestinationConfig</a>

---



