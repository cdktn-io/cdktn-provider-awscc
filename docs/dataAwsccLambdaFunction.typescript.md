# `dataAwsccLambdaFunction` Submodule <a name="`dataAwsccLambdaFunction` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaFunction <a name="DataAwsccLambdaFunction" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_function awscc_lambda_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunction(scope: Construct, id: string, config: DataAwsccLambdaFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig">DataAwsccLambdaFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig">DataAwsccLambdaFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaFunction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.isConstruct"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

dataAwsccLambdaFunction.DataAwsccLambdaFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.isTerraformElement"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

dataAwsccLambdaFunction.DataAwsccLambdaFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.isTerraformDataSource"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

dataAwsccLambdaFunction.DataAwsccLambdaFunction.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.generateConfigForImport"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

dataAwsccLambdaFunction.DataAwsccLambdaFunction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLambdaFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLambdaFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLambdaFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.architectures">architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.capacityProviderConfig">capacityProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference">DataAwsccLambdaFunctionCapacityProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference">DataAwsccLambdaFunctionCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.codeSigningConfigArn">codeSigningConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference">DataAwsccLambdaFunctionDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.durableConfig">durableConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference">DataAwsccLambdaFunctionDurableConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference">DataAwsccLambdaFunctionEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference">DataAwsccLambdaFunctionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.fileSystemConfigs">fileSystemConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList">DataAwsccLambdaFunctionFileSystemConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.functionScalingConfig">functionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference">DataAwsccLambdaFunctionFunctionScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference">DataAwsccLambdaFunctionImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.layers">layers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference">DataAwsccLambdaFunctionLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.packageType">packageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.publishToLatestPublished">publishToLatestPublished</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.recursiveLoop">recursiveLoop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.runtimeManagementConfig">runtimeManagementConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference">DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.snapStart">snapStart</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference">DataAwsccLambdaFunctionSnapStartOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.snapStartResponse">snapStartResponse</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference">DataAwsccLambdaFunctionSnapStartResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList">DataAwsccLambdaFunctionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.tenancyConfig">tenancyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference">DataAwsccLambdaFunctionTenancyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.tracingConfig">tracingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference">DataAwsccLambdaFunctionTracingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference">DataAwsccLambdaFunctionVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityProviderConfig`<sup>Required</sup> <a name="capacityProviderConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.capacityProviderConfig"></a>

```typescript
public readonly capacityProviderConfig: DataAwsccLambdaFunctionCapacityProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference">DataAwsccLambdaFunctionCapacityProviderConfigOutputReference</a>

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.code"></a>

```typescript
public readonly code: DataAwsccLambdaFunctionCodeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference">DataAwsccLambdaFunctionCodeOutputReference</a>

---

##### `codeSigningConfigArn`<sup>Required</sup> <a name="codeSigningConfigArn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.codeSigningConfigArn"></a>

```typescript
public readonly codeSigningConfigArn: string;
```

- *Type:* string

---

##### `deadLetterConfig`<sup>Required</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: DataAwsccLambdaFunctionDeadLetterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference">DataAwsccLambdaFunctionDeadLetterConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `durableConfig`<sup>Required</sup> <a name="durableConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.durableConfig"></a>

```typescript
public readonly durableConfig: DataAwsccLambdaFunctionDurableConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference">DataAwsccLambdaFunctionDurableConfigOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.environment"></a>

```typescript
public readonly environment: DataAwsccLambdaFunctionEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference">DataAwsccLambdaFunctionEnvironmentOutputReference</a>

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: DataAwsccLambdaFunctionEphemeralStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference">DataAwsccLambdaFunctionEphemeralStorageOutputReference</a>

---

##### `fileSystemConfigs`<sup>Required</sup> <a name="fileSystemConfigs" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.fileSystemConfigs"></a>

```typescript
public readonly fileSystemConfigs: DataAwsccLambdaFunctionFileSystemConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList">DataAwsccLambdaFunctionFileSystemConfigsList</a>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `functionScalingConfig`<sup>Required</sup> <a name="functionScalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.functionScalingConfig"></a>

```typescript
public readonly functionScalingConfig: DataAwsccLambdaFunctionFunctionScalingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference">DataAwsccLambdaFunctionFunctionScalingConfigOutputReference</a>

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `imageConfig`<sup>Required</sup> <a name="imageConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.imageConfig"></a>

```typescript
public readonly imageConfig: DataAwsccLambdaFunctionImageConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference">DataAwsccLambdaFunctionImageConfigOutputReference</a>

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `layers`<sup>Required</sup> <a name="layers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.layers"></a>

```typescript
public readonly layers: string[];
```

- *Type:* string[]

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: DataAwsccLambdaFunctionLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference">DataAwsccLambdaFunctionLoggingConfigOutputReference</a>

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

---

##### `publishToLatestPublished`<sup>Required</sup> <a name="publishToLatestPublished" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.publishToLatestPublished"></a>

```typescript
public readonly publishToLatestPublished: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `recursiveLoop`<sup>Required</sup> <a name="recursiveLoop" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.recursiveLoop"></a>

```typescript
public readonly recursiveLoop: string;
```

- *Type:* string

---

##### `reservedConcurrentExecutions`<sup>Required</sup> <a name="reservedConcurrentExecutions" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `runtimeManagementConfig`<sup>Required</sup> <a name="runtimeManagementConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.runtimeManagementConfig"></a>

```typescript
public readonly runtimeManagementConfig: DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference">DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference</a>

---

##### `snapStart`<sup>Required</sup> <a name="snapStart" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.snapStart"></a>

```typescript
public readonly snapStart: DataAwsccLambdaFunctionSnapStartOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference">DataAwsccLambdaFunctionSnapStartOutputReference</a>

---

##### `snapStartResponse`<sup>Required</sup> <a name="snapStartResponse" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.snapStartResponse"></a>

```typescript
public readonly snapStartResponse: DataAwsccLambdaFunctionSnapStartResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference">DataAwsccLambdaFunctionSnapStartResponseOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.tags"></a>

```typescript
public readonly tags: DataAwsccLambdaFunctionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList">DataAwsccLambdaFunctionTagsList</a>

---

##### `tenancyConfig`<sup>Required</sup> <a name="tenancyConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.tenancyConfig"></a>

```typescript
public readonly tenancyConfig: DataAwsccLambdaFunctionTenancyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference">DataAwsccLambdaFunctionTenancyConfigOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `tracingConfig`<sup>Required</sup> <a name="tracingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.tracingConfig"></a>

```typescript
public readonly tracingConfig: DataAwsccLambdaFunctionTracingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference">DataAwsccLambdaFunctionTracingConfigOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsccLambdaFunctionVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference">DataAwsccLambdaFunctionVpcConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaFunctionCapacityProviderConfig <a name="DataAwsccLambdaFunctionCapacityProviderConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionCapacityProviderConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfig = { ... }
```


### DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig <a name="DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig = { ... }
```


### DataAwsccLambdaFunctionCode <a name="DataAwsccLambdaFunctionCode" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCode.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionCode: dataAwsccLambdaFunction.DataAwsccLambdaFunctionCode = { ... }
```


### DataAwsccLambdaFunctionConfig <a name="DataAwsccLambdaFunctionConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_function#id DataAwsccLambdaFunction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaFunctionDeadLetterConfig <a name="DataAwsccLambdaFunctionDeadLetterConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionDeadLetterConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfig = { ... }
```


### DataAwsccLambdaFunctionDurableConfig <a name="DataAwsccLambdaFunctionDurableConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionDurableConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfig = { ... }
```


### DataAwsccLambdaFunctionEnvironment <a name="DataAwsccLambdaFunctionEnvironment" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironment.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionEnvironment: dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironment = { ... }
```


### DataAwsccLambdaFunctionEphemeralStorage <a name="DataAwsccLambdaFunctionEphemeralStorage" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorage.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionEphemeralStorage: dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorage = { ... }
```


### DataAwsccLambdaFunctionFileSystemConfigs <a name="DataAwsccLambdaFunctionFileSystemConfigs" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigs.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionFileSystemConfigs: dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigs = { ... }
```


### DataAwsccLambdaFunctionFunctionScalingConfig <a name="DataAwsccLambdaFunctionFunctionScalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionFunctionScalingConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfig = { ... }
```


### DataAwsccLambdaFunctionImageConfig <a name="DataAwsccLambdaFunctionImageConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionImageConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfig = { ... }
```


### DataAwsccLambdaFunctionLoggingConfig <a name="DataAwsccLambdaFunctionLoggingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionLoggingConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfig = { ... }
```


### DataAwsccLambdaFunctionRuntimeManagementConfig <a name="DataAwsccLambdaFunctionRuntimeManagementConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionRuntimeManagementConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfig = { ... }
```


### DataAwsccLambdaFunctionSnapStart <a name="DataAwsccLambdaFunctionSnapStart" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStart.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionSnapStart: dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStart = { ... }
```


### DataAwsccLambdaFunctionSnapStartResponse <a name="DataAwsccLambdaFunctionSnapStartResponse" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponse.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionSnapStartResponse: dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponse = { ... }
```


### DataAwsccLambdaFunctionTags <a name="DataAwsccLambdaFunctionTags" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTags.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionTags: dataAwsccLambdaFunction.DataAwsccLambdaFunctionTags = { ... }
```


### DataAwsccLambdaFunctionTenancyConfig <a name="DataAwsccLambdaFunctionTenancyConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionTenancyConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfig = { ... }
```


### DataAwsccLambdaFunctionTracingConfig <a name="DataAwsccLambdaFunctionTracingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionTracingConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfig = { ... }
```


### DataAwsccLambdaFunctionVpcConfig <a name="DataAwsccLambdaFunctionVpcConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

const dataAwsccLambdaFunctionVpcConfig: dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference <a name="DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArn">capacityProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpu">executionEnvironmentMemoryGiBPerVCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrency">perExecutionEnvironmentMaxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityProviderArn`<sup>Required</sup> <a name="capacityProviderArn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArn"></a>

```typescript
public readonly capacityProviderArn: string;
```

- *Type:* string

---

##### `executionEnvironmentMemoryGiBPerVCpu`<sup>Required</sup> <a name="executionEnvironmentMemoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpu"></a>

```typescript
public readonly executionEnvironmentMemoryGiBPerVCpu: number;
```

- *Type:* number

---

##### `perExecutionEnvironmentMaxConcurrency`<sup>Required</sup> <a name="perExecutionEnvironmentMaxConcurrency" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrency"></a>

```typescript
public readonly perExecutionEnvironmentMaxConcurrency: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

---


### DataAwsccLambdaFunctionCapacityProviderConfigOutputReference <a name="DataAwsccLambdaFunctionCapacityProviderConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfig">lambdaManagedInstancesCapacityProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference">DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfig">DataAwsccLambdaFunctionCapacityProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaManagedInstancesCapacityProviderConfig`<sup>Required</sup> <a name="lambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfig"></a>

```typescript
public readonly lambdaManagedInstancesCapacityProviderConfig: DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference">DataAwsccLambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionCapacityProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCapacityProviderConfig">DataAwsccLambdaFunctionCapacityProviderConfig</a>

---


### DataAwsccLambdaFunctionCodeOutputReference <a name="DataAwsccLambdaFunctionCodeOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.s3ObjectStorageMode">s3ObjectStorageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.sourceKmsKeyArn">sourceKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.zipFile">zipFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCode">DataAwsccLambdaFunctionCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `s3ObjectStorageMode`<sup>Required</sup> <a name="s3ObjectStorageMode" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.s3ObjectStorageMode"></a>

```typescript
public readonly s3ObjectStorageMode: string;
```

- *Type:* string

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

---

##### `sourceKmsKeyArn`<sup>Required</sup> <a name="sourceKmsKeyArn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.sourceKmsKeyArn"></a>

```typescript
public readonly sourceKmsKeyArn: string;
```

- *Type:* string

---

##### `zipFile`<sup>Required</sup> <a name="zipFile" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.zipFile"></a>

```typescript
public readonly zipFile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionCode;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionCode">DataAwsccLambdaFunctionCode</a>

---


### DataAwsccLambdaFunctionDeadLetterConfigOutputReference <a name="DataAwsccLambdaFunctionDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfig">DataAwsccLambdaFunctionDeadLetterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionDeadLetterConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDeadLetterConfig">DataAwsccLambdaFunctionDeadLetterConfig</a>

---


### DataAwsccLambdaFunctionDurableConfigOutputReference <a name="DataAwsccLambdaFunctionDurableConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.property.executionTimeout">executionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfig">DataAwsccLambdaFunctionDurableConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: number;
```

- *Type:* number

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionDurableConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionDurableConfig">DataAwsccLambdaFunctionDurableConfig</a>

---


### DataAwsccLambdaFunctionEnvironmentOutputReference <a name="DataAwsccLambdaFunctionEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.property.variables">variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironment">DataAwsccLambdaFunctionEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.property.variables"></a>

```typescript
public readonly variables: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionEnvironment;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEnvironment">DataAwsccLambdaFunctionEnvironment</a>

---


### DataAwsccLambdaFunctionEphemeralStorageOutputReference <a name="DataAwsccLambdaFunctionEphemeralStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorage">DataAwsccLambdaFunctionEphemeralStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionEphemeralStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionEphemeralStorage">DataAwsccLambdaFunctionEphemeralStorage</a>

---


### DataAwsccLambdaFunctionFileSystemConfigsList <a name="DataAwsccLambdaFunctionFileSystemConfigsList" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaFunctionFileSystemConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaFunctionFileSystemConfigsOutputReference <a name="DataAwsccLambdaFunctionFileSystemConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.property.localMountPath">localMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigs">DataAwsccLambdaFunctionFileSystemConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `localMountPath`<sup>Required</sup> <a name="localMountPath" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.property.localMountPath"></a>

```typescript
public readonly localMountPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionFileSystemConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFileSystemConfigs">DataAwsccLambdaFunctionFileSystemConfigs</a>

---


### DataAwsccLambdaFunctionFunctionScalingConfigOutputReference <a name="DataAwsccLambdaFunctionFunctionScalingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments">maxExecutionEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironments">minExecutionEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfig">DataAwsccLambdaFunctionFunctionScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxExecutionEnvironments`<sup>Required</sup> <a name="maxExecutionEnvironments" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments"></a>

```typescript
public readonly maxExecutionEnvironments: number;
```

- *Type:* number

---

##### `minExecutionEnvironments`<sup>Required</sup> <a name="minExecutionEnvironments" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironments"></a>

```typescript
public readonly minExecutionEnvironments: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionFunctionScalingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionFunctionScalingConfig">DataAwsccLambdaFunctionFunctionScalingConfig</a>

---


### DataAwsccLambdaFunctionImageConfigOutputReference <a name="DataAwsccLambdaFunctionImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.entryPoint">entryPoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfig">DataAwsccLambdaFunctionImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.entryPoint"></a>

```typescript
public readonly entryPoint: string[];
```

- *Type:* string[]

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionImageConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionImageConfig">DataAwsccLambdaFunctionImageConfig</a>

---


### DataAwsccLambdaFunctionLoggingConfigOutputReference <a name="DataAwsccLambdaFunctionLoggingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfig">DataAwsccLambdaFunctionLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogLevel`<sup>Required</sup> <a name="applicationLogLevel" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `systemLogLevel`<sup>Required</sup> <a name="systemLogLevel" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionLoggingConfig">DataAwsccLambdaFunctionLoggingConfig</a>

---


### DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference <a name="DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArn">runtimeVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOn">updateRuntimeOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfig">DataAwsccLambdaFunctionRuntimeManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `runtimeVersionArn`<sup>Required</sup> <a name="runtimeVersionArn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArn"></a>

```typescript
public readonly runtimeVersionArn: string;
```

- *Type:* string

---

##### `updateRuntimeOn`<sup>Required</sup> <a name="updateRuntimeOn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOn"></a>

```typescript
public readonly updateRuntimeOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionRuntimeManagementConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionRuntimeManagementConfig">DataAwsccLambdaFunctionRuntimeManagementConfig</a>

---


### DataAwsccLambdaFunctionSnapStartOutputReference <a name="DataAwsccLambdaFunctionSnapStartOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.property.applyOn">applyOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStart">DataAwsccLambdaFunctionSnapStart</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyOn`<sup>Required</sup> <a name="applyOn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.property.applyOn"></a>

```typescript
public readonly applyOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionSnapStart;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStart">DataAwsccLambdaFunctionSnapStart</a>

---


### DataAwsccLambdaFunctionSnapStartResponseOutputReference <a name="DataAwsccLambdaFunctionSnapStartResponseOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.property.applyOn">applyOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.property.optimizationStatus">optimizationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponse">DataAwsccLambdaFunctionSnapStartResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyOn`<sup>Required</sup> <a name="applyOn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.property.applyOn"></a>

```typescript
public readonly applyOn: string;
```

- *Type:* string

---

##### `optimizationStatus`<sup>Required</sup> <a name="optimizationStatus" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.property.optimizationStatus"></a>

```typescript
public readonly optimizationStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionSnapStartResponse;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionSnapStartResponse">DataAwsccLambdaFunctionSnapStartResponse</a>

---


### DataAwsccLambdaFunctionTagsList <a name="DataAwsccLambdaFunctionTagsList" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaFunctionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaFunctionTagsOutputReference <a name="DataAwsccLambdaFunctionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTags">DataAwsccLambdaFunctionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTags">DataAwsccLambdaFunctionTags</a>

---


### DataAwsccLambdaFunctionTenancyConfigOutputReference <a name="DataAwsccLambdaFunctionTenancyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.property.tenantIsolationMode">tenantIsolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfig">DataAwsccLambdaFunctionTenancyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tenantIsolationMode`<sup>Required</sup> <a name="tenantIsolationMode" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.property.tenantIsolationMode"></a>

```typescript
public readonly tenantIsolationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionTenancyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTenancyConfig">DataAwsccLambdaFunctionTenancyConfig</a>

---


### DataAwsccLambdaFunctionTracingConfigOutputReference <a name="DataAwsccLambdaFunctionTracingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfig">DataAwsccLambdaFunctionTracingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionTracingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionTracingConfig">DataAwsccLambdaFunctionTracingConfig</a>

---


### DataAwsccLambdaFunctionVpcConfigOutputReference <a name="DataAwsccLambdaFunctionVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaFunction } from '@cdktn/provider-awscc'

new dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfig">DataAwsccLambdaFunctionVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6AllowedForDualStack`<sup>Required</sup> <a name="ipv6AllowedForDualStack" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaFunctionVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaFunction.DataAwsccLambdaFunctionVpcConfig">DataAwsccLambdaFunctionVpcConfig</a>

---



