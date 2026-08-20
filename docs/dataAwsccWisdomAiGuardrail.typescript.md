# `dataAwsccWisdomAiGuardrail` Submodule <a name="`dataAwsccWisdomAiGuardrail` Submodule" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWisdomAiGuardrail <a name="DataAwsccWisdomAiGuardrail" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wisdom_ai_guardrail awscc_wisdom_ai_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail(scope: Construct, id: string, config: DataAwsccWisdomAiGuardrailConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig">DataAwsccWisdomAiGuardrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig">DataAwsccWisdomAiGuardrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWisdomAiGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isConstruct"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isTerraformElement"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isTerraformDataSource"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.generateConfigForImport"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccWisdomAiGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWisdomAiGuardrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWisdomAiGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wisdom_ai_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWisdomAiGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.aiGuardrailArn">aiGuardrailArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.aiGuardrailId">aiGuardrailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.assistantArn">assistantArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.assistantId">assistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.blockedInputMessaging">blockedInputMessaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.blockedOutputsMessaging">blockedOutputsMessaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.contentPolicyConfig">contentPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference">DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.contextualGroundingPolicyConfig">contextualGroundingPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference">DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.modifiedTimeSeconds">modifiedTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.sensitiveInformationPolicyConfig">sensitiveInformationPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.topicPolicyConfig">topicPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference">DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.wordPolicyConfig">wordPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference">DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `aiGuardrailArn`<sup>Required</sup> <a name="aiGuardrailArn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.aiGuardrailArn"></a>

```typescript
public readonly aiGuardrailArn: string;
```

- *Type:* string

---

##### `aiGuardrailId`<sup>Required</sup> <a name="aiGuardrailId" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.aiGuardrailId"></a>

```typescript
public readonly aiGuardrailId: string;
```

- *Type:* string

---

##### `assistantArn`<sup>Required</sup> <a name="assistantArn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.assistantArn"></a>

```typescript
public readonly assistantArn: string;
```

- *Type:* string

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

---

##### `blockedInputMessaging`<sup>Required</sup> <a name="blockedInputMessaging" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.blockedInputMessaging"></a>

```typescript
public readonly blockedInputMessaging: string;
```

- *Type:* string

---

##### `blockedOutputsMessaging`<sup>Required</sup> <a name="blockedOutputsMessaging" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.blockedOutputsMessaging"></a>

```typescript
public readonly blockedOutputsMessaging: string;
```

- *Type:* string

---

##### `contentPolicyConfig`<sup>Required</sup> <a name="contentPolicyConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.contentPolicyConfig"></a>

```typescript
public readonly contentPolicyConfig: DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference">DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference</a>

---

##### `contextualGroundingPolicyConfig`<sup>Required</sup> <a name="contextualGroundingPolicyConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.contextualGroundingPolicyConfig"></a>

```typescript
public readonly contextualGroundingPolicyConfig: DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference">DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `modifiedTimeSeconds`<sup>Required</sup> <a name="modifiedTimeSeconds" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.modifiedTimeSeconds"></a>

```typescript
public readonly modifiedTimeSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sensitiveInformationPolicyConfig`<sup>Required</sup> <a name="sensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.sensitiveInformationPolicyConfig"></a>

```typescript
public readonly sensitiveInformationPolicyConfig: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `topicPolicyConfig`<sup>Required</sup> <a name="topicPolicyConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.topicPolicyConfig"></a>

```typescript
public readonly topicPolicyConfig: DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference">DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference</a>

---

##### `wordPolicyConfig`<sup>Required</sup> <a name="wordPolicyConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.wordPolicyConfig"></a>

```typescript
public readonly wordPolicyConfig: DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference">DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrail.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWisdomAiGuardrailConfig <a name="DataAwsccWisdomAiGuardrailConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wisdom_ai_guardrail#id DataAwsccWisdomAiGuardrail#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWisdomAiGuardrailContentPolicyConfig <a name="DataAwsccWisdomAiGuardrailContentPolicyConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailContentPolicyConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfig = { ... }
```


### DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig <a name="DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig = { ... }
```


### DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig <a name="DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig = { ... }
```


### DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig <a name="DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig = { ... }
```


### DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig <a name="DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig = { ... }
```


### DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig <a name="DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig = { ... }
```


### DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig <a name="DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig = { ... }
```


### DataAwsccWisdomAiGuardrailTopicPolicyConfig <a name="DataAwsccWisdomAiGuardrailTopicPolicyConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailTopicPolicyConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfig = { ... }
```


### DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig <a name="DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig = { ... }
```


### DataAwsccWisdomAiGuardrailWordPolicyConfig <a name="DataAwsccWisdomAiGuardrailWordPolicyConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailWordPolicyConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfig = { ... }
```


### DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig <a name="DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig = { ... }
```


### DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig <a name="DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

const dataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig: dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList <a name="DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.get"></a>

```typescript
public get(index: number): DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference <a name="DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength">inputStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength">outputStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig">DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputStrength`<sup>Required</sup> <a name="inputStrength" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength"></a>

```typescript
public readonly inputStrength: string;
```

- *Type:* string

---

##### `outputStrength`<sup>Required</sup> <a name="outputStrength" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength"></a>

```typescript
public readonly outputStrength: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig">DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig</a>

---


### DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference <a name="DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfig">filtersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList">DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfig">DataAwsccWisdomAiGuardrailContentPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filtersConfig`<sup>Required</sup> <a name="filtersConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfig"></a>

```typescript
public readonly filtersConfig: DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList">DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailContentPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContentPolicyConfig">DataAwsccWisdomAiGuardrailContentPolicyConfig</a>

---


### DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList <a name="DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get"></a>

```typescript
public get(index: number): DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference <a name="DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>

---


### DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference <a name="DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig">filtersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList">DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig">DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filtersConfig`<sup>Required</sup> <a name="filtersConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig"></a>

```typescript
public readonly filtersConfig: DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList">DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig">DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig</a>

---


### DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference <a name="DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig">piiEntitiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig">regexesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `piiEntitiesConfig`<sup>Required</sup> <a name="piiEntitiesConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig"></a>

```typescript
public readonly piiEntitiesConfig: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a>

---

##### `regexesConfig`<sup>Required</sup> <a name="regexesConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig"></a>

```typescript
public readonly regexesConfig: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig</a>

---


### DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList <a name="DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get"></a>

```typescript
public get(index: number): DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference <a name="DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>

---


### DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList <a name="DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get"></a>

```typescript
public get(index: number): DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference <a name="DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>

---


### DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference <a name="DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfig">topicsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList">DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfig">DataAwsccWisdomAiGuardrailTopicPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicsConfig`<sup>Required</sup> <a name="topicsConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfig"></a>

```typescript
public readonly topicsConfig: DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList">DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailTopicPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfig">DataAwsccWisdomAiGuardrailTopicPolicyConfig</a>

---


### DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList <a name="DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get"></a>

```typescript
public get(index: number): DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference <a name="DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples">examples</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig">DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples"></a>

```typescript
public readonly examples: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig">DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>

---


### DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList <a name="DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get"></a>

```typescript
public get(index: number): DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference <a name="DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>

---


### DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference <a name="DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig">managedWordListsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList">DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfig">wordsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList">DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfig">DataAwsccWisdomAiGuardrailWordPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedWordListsConfig`<sup>Required</sup> <a name="managedWordListsConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig"></a>

```typescript
public readonly managedWordListsConfig: DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList">DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList</a>

---

##### `wordsConfig`<sup>Required</sup> <a name="wordsConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfig"></a>

```typescript
public readonly wordsConfig: DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList">DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailWordPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfig">DataAwsccWisdomAiGuardrailWordPolicyConfig</a>

---


### DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList <a name="DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.get"></a>

```typescript
public get(index: number): DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference <a name="DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomAiGuardrail } from '@cdktn/provider-awscc'

new dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig">DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrail.DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig">DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig</a>

---



