# `dataAwsccDatabrewRuleset` Submodule <a name="`dataAwsccDatabrewRuleset` Submodule" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatabrewRuleset <a name="DataAwsccDatabrewRuleset" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/databrew_ruleset awscc_databrew_ruleset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

new dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset(scope: Construct, id: string, config: DataAwsccDatabrewRulesetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig">DataAwsccDatabrewRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig">DataAwsccDatabrewRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatabrewRuleset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isConstruct"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isTerraformElement"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isTerraformDataSource"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.generateConfigForImport"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDatabrewRuleset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatabrewRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatabrewRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/databrew_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatabrewRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList">DataAwsccDatabrewRulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList">DataAwsccDatabrewRulesetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.rules"></a>

```typescript
public readonly rules: DataAwsccDatabrewRulesetRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList">DataAwsccDatabrewRulesetRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.tags"></a>

```typescript
public readonly tags: DataAwsccDatabrewRulesetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList">DataAwsccDatabrewRulesetTagsList</a>

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRuleset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatabrewRulesetConfig <a name="DataAwsccDatabrewRulesetConfig" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

const dataAwsccDatabrewRulesetConfig: dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/databrew_ruleset#id DataAwsccDatabrewRuleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatabrewRulesetRules <a name="DataAwsccDatabrewRulesetRules" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRules.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

const dataAwsccDatabrewRulesetRules: dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRules = { ... }
```


### DataAwsccDatabrewRulesetRulesColumnSelectors <a name="DataAwsccDatabrewRulesetRulesColumnSelectors" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectors.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

const dataAwsccDatabrewRulesetRulesColumnSelectors: dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectors = { ... }
```


### DataAwsccDatabrewRulesetRulesSubstitutionMap <a name="DataAwsccDatabrewRulesetRulesSubstitutionMap" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMap.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

const dataAwsccDatabrewRulesetRulesSubstitutionMap: dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMap = { ... }
```


### DataAwsccDatabrewRulesetRulesThreshold <a name="DataAwsccDatabrewRulesetRulesThreshold" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThreshold.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

const dataAwsccDatabrewRulesetRulesThreshold: dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThreshold = { ... }
```


### DataAwsccDatabrewRulesetTags <a name="DataAwsccDatabrewRulesetTags" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTags.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

const dataAwsccDatabrewRulesetTags: dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatabrewRulesetRulesColumnSelectorsList <a name="DataAwsccDatabrewRulesetRulesColumnSelectorsList" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

new dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference <a name="DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

new dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectors">DataAwsccDatabrewRulesetRulesColumnSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewRulesetRulesColumnSelectors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectors">DataAwsccDatabrewRulesetRulesColumnSelectors</a>

---


### DataAwsccDatabrewRulesetRulesList <a name="DataAwsccDatabrewRulesetRulesList" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

new dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewRulesetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewRulesetRulesOutputReference <a name="DataAwsccDatabrewRulesetRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

new dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.checkExpression">checkExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.columnSelectors">columnSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList">DataAwsccDatabrewRulesetRulesColumnSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.substitutionMap">substitutionMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList">DataAwsccDatabrewRulesetRulesSubstitutionMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference">DataAwsccDatabrewRulesetRulesThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRules">DataAwsccDatabrewRulesetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkExpression`<sup>Required</sup> <a name="checkExpression" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.checkExpression"></a>

```typescript
public readonly checkExpression: string;
```

- *Type:* string

---

##### `columnSelectors`<sup>Required</sup> <a name="columnSelectors" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.columnSelectors"></a>

```typescript
public readonly columnSelectors: DataAwsccDatabrewRulesetRulesColumnSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesColumnSelectorsList">DataAwsccDatabrewRulesetRulesColumnSelectorsList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `substitutionMap`<sup>Required</sup> <a name="substitutionMap" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.substitutionMap"></a>

```typescript
public readonly substitutionMap: DataAwsccDatabrewRulesetRulesSubstitutionMapList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList">DataAwsccDatabrewRulesetRulesSubstitutionMapList</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataAwsccDatabrewRulesetRulesThresholdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference">DataAwsccDatabrewRulesetRulesThresholdOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewRulesetRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRules">DataAwsccDatabrewRulesetRules</a>

---


### DataAwsccDatabrewRulesetRulesSubstitutionMapList <a name="DataAwsccDatabrewRulesetRulesSubstitutionMapList" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

new dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference <a name="DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

new dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.property.valueReference">valueReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMap">DataAwsccDatabrewRulesetRulesSubstitutionMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueReference`<sup>Required</sup> <a name="valueReference" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.property.valueReference"></a>

```typescript
public readonly valueReference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewRulesetRulesSubstitutionMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesSubstitutionMap">DataAwsccDatabrewRulesetRulesSubstitutionMap</a>

---


### DataAwsccDatabrewRulesetRulesThresholdOutputReference <a name="DataAwsccDatabrewRulesetRulesThresholdOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

new dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThreshold">DataAwsccDatabrewRulesetRulesThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewRulesetRulesThreshold;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetRulesThreshold">DataAwsccDatabrewRulesetRulesThreshold</a>

---


### DataAwsccDatabrewRulesetTagsList <a name="DataAwsccDatabrewRulesetTagsList" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

new dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewRulesetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewRulesetTagsOutputReference <a name="DataAwsccDatabrewRulesetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewRuleset } from '@cdktn/provider-awscc'

new dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTags">DataAwsccDatabrewRulesetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewRulesetTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewRuleset.DataAwsccDatabrewRulesetTags">DataAwsccDatabrewRulesetTags</a>

---



