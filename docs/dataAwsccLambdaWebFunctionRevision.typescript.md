# `dataAwsccLambdaWebFunctionRevision` Submodule <a name="`dataAwsccLambdaWebFunctionRevision` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaWebFunctionRevision <a name="DataAwsccLambdaWebFunctionRevision" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_revision awscc_lambda_web_function_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision(scope: Construct, id: string, config: DataAwsccLambdaWebFunctionRevisionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig">DataAwsccLambdaWebFunctionRevisionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig">DataAwsccLambdaWebFunctionRevisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isConstruct"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformElement"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformDataSource"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLambdaWebFunctionRevision to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLambdaWebFunctionRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaWebFunctionRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionArn">revisionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.stateReason">stateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.buildConfig"></a>

```typescript
public readonly buildConfig: DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `revisionArn`<sup>Required</sup> <a name="revisionArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionArn"></a>

```typescript
public readonly revisionArn: string;
```

- *Type:* string

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.serviceConfig"></a>

```typescript
public readonly serviceConfig: DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaWebFunctionRevisionBuildConfig <a name="DataAwsccLambdaWebFunctionRevisionBuildConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionRevisionBuildConfig: dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig = { ... }
```


### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig: dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig = { ... }
```


### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object: dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object = { ... }
```


### DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig: dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig = { ... }
```


### DataAwsccLambdaWebFunctionRevisionConfig <a name="DataAwsccLambdaWebFunctionRevisionConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionRevisionConfig: dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_revision#id DataAwsccLambdaWebFunctionRevision#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaWebFunctionRevisionServiceConfig <a name="DataAwsccLambdaWebFunctionRevisionServiceConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionRevisionServiceConfig: dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig = { ... }
```


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig: dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig = { ... }
```


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig: dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object">s3Object</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Object`<sup>Required</sup> <a name="s3Object" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object"></a>

```typescript
public readonly s3Object: DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


### DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig">codeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig">DataAwsccLambdaWebFunctionRevisionBuildConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeConfig`<sup>Required</sup> <a name="codeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig"></a>

```typescript
public readonly codeConfig: DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a>

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionRevisionBuildConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig">DataAwsccLambdaWebFunctionRevisionBuildConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment">maxConcurrencyPerEnvironment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig">DataAwsccLambdaWebFunctionRevisionServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `maxConcurrencyPerEnvironment`<sup>Required</sup> <a name="maxConcurrencyPerEnvironment" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment"></a>

```typescript
public readonly maxConcurrencyPerEnvironment: number;
```

- *Type:* number

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a>

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionRevisionServiceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig">DataAwsccLambdaWebFunctionRevisionServiceConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogLevel`<sup>Required</sup> <a name="applicationLogLevel" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `systemLogLevel`<sup>Required</sup> <a name="systemLogLevel" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---



