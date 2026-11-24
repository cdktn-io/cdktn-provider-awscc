# `dataAwsccLambdaRuntimeVersion` Submodule <a name="`dataAwsccLambdaRuntimeVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaRuntimeVersion <a name="DataAwsccLambdaRuntimeVersion" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_version awscc_lambda_runtime_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeVersion } from '@cdktn/provider-awscc'

new dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion(scope: Construct, id: string, config: DataAwsccLambdaRuntimeVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig">DataAwsccLambdaRuntimeVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig">DataAwsccLambdaRuntimeVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaRuntimeVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isConstruct"></a>

```typescript
import { dataAwsccLambdaRuntimeVersion } from '@cdktn/provider-awscc'

dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformElement"></a>

```typescript
import { dataAwsccLambdaRuntimeVersion } from '@cdktn/provider-awscc'

dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformDataSource"></a>

```typescript
import { dataAwsccLambdaRuntimeVersion } from '@cdktn/provider-awscc'

dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport"></a>

```typescript
import { dataAwsccLambdaRuntimeVersion } from '@cdktn/provider-awscc'

dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLambdaRuntimeVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLambdaRuntimeVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLambdaRuntimeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaRuntimeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.compatibility">compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference">DataAwsccLambdaRuntimeVersionCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.platforms">platforms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList">DataAwsccLambdaRuntimeVersionPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.releaseNotes">releaseNotes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.resolvedUri">resolvedUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.runtimeName">runtimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.compatibility"></a>

```typescript
public readonly compatibility: DataAwsccLambdaRuntimeVersionCompatibilityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference">DataAwsccLambdaRuntimeVersionCompatibilityOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.platforms"></a>

```typescript
public readonly platforms: DataAwsccLambdaRuntimeVersionPlatformsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList">DataAwsccLambdaRuntimeVersionPlatformsList</a>

---

##### `releaseNotes`<sup>Required</sup> <a name="releaseNotes" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.releaseNotes"></a>

```typescript
public readonly releaseNotes: string;
```

- *Type:* string

---

##### `resolvedUri`<sup>Required</sup> <a name="resolvedUri" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.resolvedUri"></a>

```typescript
public readonly resolvedUri: string;
```

- *Type:* string

---

##### `runtimeName`<sup>Required</sup> <a name="runtimeName" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.runtimeName"></a>

```typescript
public readonly runtimeName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaRuntimeVersionCompatibility <a name="DataAwsccLambdaRuntimeVersionCompatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeVersion } from '@cdktn/provider-awscc'

const dataAwsccLambdaRuntimeVersionCompatibility: dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility = { ... }
```


### DataAwsccLambdaRuntimeVersionConfig <a name="DataAwsccLambdaRuntimeVersionConfig" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeVersion } from '@cdktn/provider-awscc'

const dataAwsccLambdaRuntimeVersionConfig: dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_version#id DataAwsccLambdaRuntimeVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaRuntimeVersionPlatforms <a name="DataAwsccLambdaRuntimeVersionPlatforms" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeVersion } from '@cdktn/provider-awscc'

const dataAwsccLambdaRuntimeVersionPlatforms: dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaRuntimeVersionCompatibilityOutputReference <a name="DataAwsccLambdaRuntimeVersionCompatibilityOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeVersion } from '@cdktn/provider-awscc'

new dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.architectures">architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.integrationModels">integrationModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.managedInstances">managedInstances</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility">DataAwsccLambdaRuntimeVersionCompatibility</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

---

##### `integrationModels`<sup>Required</sup> <a name="integrationModels" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.integrationModels"></a>

```typescript
public readonly integrationModels: string[];
```

- *Type:* string[]

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.managedInstances"></a>

```typescript
public readonly managedInstances: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaRuntimeVersionCompatibility;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility">DataAwsccLambdaRuntimeVersionCompatibility</a>

---


### DataAwsccLambdaRuntimeVersionPlatformsList <a name="DataAwsccLambdaRuntimeVersionPlatformsList" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeVersion } from '@cdktn/provider-awscc'

new dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaRuntimeVersionPlatformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaRuntimeVersionPlatformsOutputReference <a name="DataAwsccLambdaRuntimeVersionPlatformsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeVersion } from '@cdktn/provider-awscc'

new dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms">DataAwsccLambdaRuntimeVersionPlatforms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaRuntimeVersionPlatforms;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms">DataAwsccLambdaRuntimeVersionPlatforms</a>

---



