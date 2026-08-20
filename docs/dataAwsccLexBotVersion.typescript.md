# `dataAwsccLexBotVersion` Submodule <a name="`dataAwsccLexBotVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccLexBotVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLexBotVersion <a name="DataAwsccLexBotVersion" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/lex_bot_version awscc_lex_bot_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.Initializer"></a>

```typescript
import { dataAwsccLexBotVersion } from '@cdktn/provider-awscc'

new dataAwsccLexBotVersion.DataAwsccLexBotVersion(scope: Construct, id: string, config: DataAwsccLexBotVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig">DataAwsccLexBotVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig">DataAwsccLexBotVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLexBotVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.isConstruct"></a>

```typescript
import { dataAwsccLexBotVersion } from '@cdktn/provider-awscc'

dataAwsccLexBotVersion.DataAwsccLexBotVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.isTerraformElement"></a>

```typescript
import { dataAwsccLexBotVersion } from '@cdktn/provider-awscc'

dataAwsccLexBotVersion.DataAwsccLexBotVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.isTerraformDataSource"></a>

```typescript
import { dataAwsccLexBotVersion } from '@cdktn/provider-awscc'

dataAwsccLexBotVersion.DataAwsccLexBotVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.generateConfigForImport"></a>

```typescript
import { dataAwsccLexBotVersion } from '@cdktn/provider-awscc'

dataAwsccLexBotVersion.DataAwsccLexBotVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLexBotVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLexBotVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLexBotVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/lex_bot_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLexBotVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.botId">botId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.botVersion">botVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.botVersionLocaleSpecification">botVersionLocaleSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList">DataAwsccLexBotVersionBotVersionLocaleSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

---

##### `botVersionLocaleSpecification`<sup>Required</sup> <a name="botVersionLocaleSpecification" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.botVersionLocaleSpecification"></a>

```typescript
public readonly botVersionLocaleSpecification: DataAwsccLexBotVersionBotVersionLocaleSpecificationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList">DataAwsccLexBotVersionBotVersionLocaleSpecificationList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLexBotVersionBotVersionLocaleSpecification <a name="DataAwsccLexBotVersionBotVersionLocaleSpecification" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecification.Initializer"></a>

```typescript
import { dataAwsccLexBotVersion } from '@cdktn/provider-awscc'

const dataAwsccLexBotVersionBotVersionLocaleSpecification: dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecification = { ... }
```


### DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails <a name="DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails.Initializer"></a>

```typescript
import { dataAwsccLexBotVersion } from '@cdktn/provider-awscc'

const dataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails: dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails = { ... }
```


### DataAwsccLexBotVersionConfig <a name="DataAwsccLexBotVersionConfig" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.Initializer"></a>

```typescript
import { dataAwsccLexBotVersion } from '@cdktn/provider-awscc'

const dataAwsccLexBotVersionConfig: dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/lex_bot_version#id DataAwsccLexBotVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference <a name="DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLexBotVersion } from '@cdktn/provider-awscc'

new dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersion">sourceBotVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceBotVersion`<sup>Required</sup> <a name="sourceBotVersion" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersion"></a>

```typescript
public readonly sourceBotVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a>

---


### DataAwsccLexBotVersionBotVersionLocaleSpecificationList <a name="DataAwsccLexBotVersionBotVersionLocaleSpecificationList" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.Initializer"></a>

```typescript
import { dataAwsccLexBotVersion } from '@cdktn/provider-awscc'

new dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.get"></a>

```typescript
public get(index: number): DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference <a name="DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLexBotVersion } from '@cdktn/provider-awscc'

new dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetails">botVersionLocaleDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference">DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeId">localeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecification">DataAwsccLexBotVersionBotVersionLocaleSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `botVersionLocaleDetails`<sup>Required</sup> <a name="botVersionLocaleDetails" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetails"></a>

```typescript
public readonly botVersionLocaleDetails: DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference">DataAwsccLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference</a>

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeId"></a>

```typescript
public readonly localeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLexBotVersionBotVersionLocaleSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotVersion.DataAwsccLexBotVersionBotVersionLocaleSpecification">DataAwsccLexBotVersionBotVersionLocaleSpecification</a>

---



