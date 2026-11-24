# `dataAwsccLambdaRuntimeAlias` Submodule <a name="`dataAwsccLambdaRuntimeAlias` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaRuntimeAlias <a name="DataAwsccLambdaRuntimeAlias" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias awscc_lambda_runtime_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeAlias } from '@cdktn/provider-awscc'

new dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias(scope: Construct, id: string, config: DataAwsccLambdaRuntimeAliasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig">DataAwsccLambdaRuntimeAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig">DataAwsccLambdaRuntimeAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaRuntimeAlias resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isConstruct"></a>

```typescript
import { dataAwsccLambdaRuntimeAlias } from '@cdktn/provider-awscc'

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformElement"></a>

```typescript
import { dataAwsccLambdaRuntimeAlias } from '@cdktn/provider-awscc'

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformDataSource"></a>

```typescript
import { dataAwsccLambdaRuntimeAlias } from '@cdktn/provider-awscc'

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport"></a>

```typescript
import { dataAwsccLambdaRuntimeAlias } from '@cdktn/provider-awscc'

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLambdaRuntimeAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLambdaRuntimeAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLambdaRuntimeAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaRuntimeAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.compatibility">compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference">DataAwsccLambdaRuntimeAliasCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.releaseLifecycle">releaseLifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference">DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeName">runtimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersionArn">runtimeVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.compatibility"></a>

```typescript
public readonly compatibility: DataAwsccLambdaRuntimeAliasCompatibilityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference">DataAwsccLambdaRuntimeAliasCompatibilityOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `releaseLifecycle`<sup>Required</sup> <a name="releaseLifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.releaseLifecycle"></a>

```typescript
public readonly releaseLifecycle: DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference">DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference</a>

---

##### `runtimeName`<sup>Required</sup> <a name="runtimeName" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeName"></a>

```typescript
public readonly runtimeName: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `runtimeVersionArn`<sup>Required</sup> <a name="runtimeVersionArn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersionArn"></a>

```typescript
public readonly runtimeVersionArn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaRuntimeAliasCompatibility <a name="DataAwsccLambdaRuntimeAliasCompatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeAlias } from '@cdktn/provider-awscc'

const dataAwsccLambdaRuntimeAliasCompatibility: dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility = { ... }
```


### DataAwsccLambdaRuntimeAliasConfig <a name="DataAwsccLambdaRuntimeAliasConfig" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeAlias } from '@cdktn/provider-awscc'

const dataAwsccLambdaRuntimeAliasConfig: dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias#id DataAwsccLambdaRuntimeAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaRuntimeAliasReleaseLifecycle <a name="DataAwsccLambdaRuntimeAliasReleaseLifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeAlias } from '@cdktn/provider-awscc'

const dataAwsccLambdaRuntimeAliasReleaseLifecycle: dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaRuntimeAliasCompatibilityOutputReference <a name="DataAwsccLambdaRuntimeAliasCompatibilityOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeAlias } from '@cdktn/provider-awscc'

new dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.architectures">architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels">integrationModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances">managedInstances</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility">DataAwsccLambdaRuntimeAliasCompatibility</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

---

##### `integrationModels`<sup>Required</sup> <a name="integrationModels" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels"></a>

```typescript
public readonly integrationModels: string[];
```

- *Type:* string[]

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances"></a>

```typescript
public readonly managedInstances: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaRuntimeAliasCompatibility;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility">DataAwsccLambdaRuntimeAliasCompatibility</a>

---


### DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference <a name="DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaRuntimeAlias } from '@cdktn/provider-awscc'

new dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate">deprecationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate">functionCreateBlockDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate">functionUpdateBlockDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState">releaseState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle">DataAwsccLambdaRuntimeAliasReleaseLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deprecationDate`<sup>Required</sup> <a name="deprecationDate" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate"></a>

```typescript
public readonly deprecationDate: string;
```

- *Type:* string

---

##### `functionCreateBlockDate`<sup>Required</sup> <a name="functionCreateBlockDate" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate"></a>

```typescript
public readonly functionCreateBlockDate: string;
```

- *Type:* string

---

##### `functionUpdateBlockDate`<sup>Required</sup> <a name="functionUpdateBlockDate" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate"></a>

```typescript
public readonly functionUpdateBlockDate: string;
```

- *Type:* string

---

##### `releaseState`<sup>Required</sup> <a name="releaseState" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState"></a>

```typescript
public readonly releaseState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaRuntimeAliasReleaseLifecycle;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle">DataAwsccLambdaRuntimeAliasReleaseLifecycle</a>

---



