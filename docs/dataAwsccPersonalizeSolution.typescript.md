# `dataAwsccPersonalizeSolution` Submodule <a name="`dataAwsccPersonalizeSolution` Submodule" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPersonalizeSolution <a name="DataAwsccPersonalizeSolution" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/personalize_solution awscc_personalize_solution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution(scope: Construct, id: string, config: DataAwsccPersonalizeSolutionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig">DataAwsccPersonalizeSolutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig">DataAwsccPersonalizeSolutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPersonalizeSolution resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isConstruct"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformElement"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformDataSource"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccPersonalizeSolution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccPersonalizeSolution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccPersonalizeSolution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/personalize_solution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPersonalizeSolution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.datasetGroupArn">datasetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.performAutoMl">performAutoMl</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.performHpo">performHpo</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.recipeArn">recipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.solutionArn">solutionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.solutionConfig">solutionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.datasetGroupArn"></a>

```typescript
public readonly datasetGroupArn: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `performAutoMl`<sup>Required</sup> <a name="performAutoMl" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.performAutoMl"></a>

```typescript
public readonly performAutoMl: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `performHpo`<sup>Required</sup> <a name="performHpo" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.performHpo"></a>

```typescript
public readonly performHpo: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `recipeArn`<sup>Required</sup> <a name="recipeArn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.recipeArn"></a>

```typescript
public readonly recipeArn: string;
```

- *Type:* string

---

##### `solutionArn`<sup>Required</sup> <a name="solutionArn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.solutionArn"></a>

```typescript
public readonly solutionArn: string;
```

- *Type:* string

---

##### `solutionConfig`<sup>Required</sup> <a name="solutionConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.solutionConfig"></a>

```typescript
public readonly solutionConfig: DataAwsccPersonalizeSolutionSolutionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPersonalizeSolutionConfig <a name="DataAwsccPersonalizeSolutionConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeSolutionConfig: dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/personalize_solution#id DataAwsccPersonalizeSolution#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPersonalizeSolutionSolutionConfig <a name="DataAwsccPersonalizeSolutionSolutionConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfig.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeSolutionSolutionConfig: dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfig = { ... }
```


### DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig <a name="DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig: dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig = { ... }
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfig <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfig.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeSolutionSolutionConfigHpoConfig: dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfig = { ... }
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges: dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges = { ... }
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges: dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges = { ... }
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges: dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges = { ... }
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges: dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges = { ... }
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective: dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective = { ... }
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig: dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeList">recipeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig">DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `recipeList`<sup>Required</sup> <a name="recipeList" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeList"></a>

```typescript
public readonly recipeList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig">DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get"></a>

```typescript
public get(index: number): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get"></a>

```typescript
public get(index: number): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValue">maxValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValue">minValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: number;
```

- *Type:* number

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValue"></a>

```typescript
public readonly minValue: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get"></a>

```typescript
public get(index: number): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValue">maxValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValue">minValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: number;
```

- *Type:* number

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValue"></a>

```typescript
public readonly minValue: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRanges">categoricalHyperParameterRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRanges">continuousHyperParameterRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRanges">integerHyperParameterRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoricalHyperParameterRanges`<sup>Required</sup> <a name="categoricalHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRanges"></a>

```typescript
public readonly categoricalHyperParameterRanges: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList</a>

---

##### `continuousHyperParameterRanges`<sup>Required</sup> <a name="continuousHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRanges"></a>

```typescript
public readonly continuousHyperParameterRanges: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList</a>

---

##### `integerHyperParameterRanges`<sup>Required</sup> <a name="integerHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRanges"></a>

```typescript
public readonly integerHyperParameterRanges: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegex">metricRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `metricRegex`<sup>Required</sup> <a name="metricRegex" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegex"></a>

```typescript
public readonly metricRegex: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobs">maxNumberOfTrainingJobs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobs">maxParallelTrainingJobs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNumberOfTrainingJobs`<sup>Required</sup> <a name="maxNumberOfTrainingJobs" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobs"></a>

```typescript
public readonly maxNumberOfTrainingJobs: string;
```

- *Type:* string

---

##### `maxParallelTrainingJobs`<sup>Required</sup> <a name="maxParallelTrainingJobs" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobs"></a>

```typescript
public readonly maxParallelTrainingJobs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRanges">algorithmHyperParameterRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjective">hpoObjective</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfig">hpoResourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfig">DataAwsccPersonalizeSolutionSolutionConfigHpoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmHyperParameterRanges`<sup>Required</sup> <a name="algorithmHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRanges"></a>

```typescript
public readonly algorithmHyperParameterRanges: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference</a>

---

##### `hpoObjective`<sup>Required</sup> <a name="hpoObjective" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjective"></a>

```typescript
public readonly hpoObjective: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference</a>

---

##### `hpoResourceConfig`<sup>Required</sup> <a name="hpoResourceConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfig"></a>

```typescript
public readonly hpoResourceConfig: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPersonalizeSolutionSolutionConfigHpoConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfig">DataAwsccPersonalizeSolutionSolutionConfigHpoConfig</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccPersonalizeSolution } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParameters">algorithmHyperParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfig">autoMlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.eventValueThreshold">eventValueThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParameters">featureTransformationParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.hpoConfig">hpoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfig">DataAwsccPersonalizeSolutionSolutionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmHyperParameters`<sup>Required</sup> <a name="algorithmHyperParameters" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParameters"></a>

```typescript
public readonly algorithmHyperParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `autoMlConfig`<sup>Required</sup> <a name="autoMlConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfig"></a>

```typescript
public readonly autoMlConfig: DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference</a>

---

##### `eventValueThreshold`<sup>Required</sup> <a name="eventValueThreshold" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.eventValueThreshold"></a>

```typescript
public readonly eventValueThreshold: string;
```

- *Type:* string

---

##### `featureTransformationParameters`<sup>Required</sup> <a name="featureTransformationParameters" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParameters"></a>

```typescript
public readonly featureTransformationParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `hpoConfig`<sup>Required</sup> <a name="hpoConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.hpoConfig"></a>

```typescript
public readonly hpoConfig: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPersonalizeSolutionSolutionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfig">DataAwsccPersonalizeSolutionSolutionConfig</a>

---



