# `dataAwsccWellarchitectedAgentProfile` Submodule <a name="`dataAwsccWellarchitectedAgentProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWellarchitectedAgentProfile <a name="DataAwsccWellarchitectedAgentProfile" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/wellarchitected_agent_profile awscc_wellarchitected_agent_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

new dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile(scope: Construct, id: string, config: DataAwsccWellarchitectedAgentProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig">DataAwsccWellarchitectedAgentProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig">DataAwsccWellarchitectedAgentProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWellarchitectedAgentProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isConstruct"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformElement"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccWellarchitectedAgentProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWellarchitectedAgentProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWellarchitectedAgentProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/wellarchitected_agent_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWellarchitectedAgentProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.aggregationConfiguration">aggregationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList">DataAwsccWellarchitectedAgentProfileAggregationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.businessOverview">businessOverview</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.deletionProtection">deletionProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lastModifiedAt">lastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lastModifiedBy">lastModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.pillars">pillars</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList">DataAwsccWellarchitectedAgentProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `aggregationConfiguration`<sup>Required</sup> <a name="aggregationConfiguration" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.aggregationConfiguration"></a>

```typescript
public readonly aggregationConfiguration: DataAwsccWellarchitectedAgentProfileAggregationConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList">DataAwsccWellarchitectedAgentProfileAggregationConfigurationList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `businessOverview`<sup>Required</sup> <a name="businessOverview" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.businessOverview"></a>

```typescript
public readonly businessOverview: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lastModifiedAt"></a>

```typescript
public readonly lastModifiedAt: string;
```

- *Type:* string

---

##### `lastModifiedBy`<sup>Required</sup> <a name="lastModifiedBy" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lastModifiedBy"></a>

```typescript
public readonly lastModifiedBy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pillars`<sup>Required</sup> <a name="pillars" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.pillars"></a>

```typescript
public readonly pillars: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.tags"></a>

```typescript
public readonly tags: DataAwsccWellarchitectedAgentProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList">DataAwsccWellarchitectedAgentProfileTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWellarchitectedAgentProfileAggregationConfiguration <a name="DataAwsccWellarchitectedAgentProfileAggregationConfiguration" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfiguration.Initializer"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

const dataAwsccWellarchitectedAgentProfileAggregationConfiguration: dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfiguration = { ... }
```


### DataAwsccWellarchitectedAgentProfileConfig <a name="DataAwsccWellarchitectedAgentProfileConfig" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.Initializer"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

const dataAwsccWellarchitectedAgentProfileConfig: dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/wellarchitected_agent_profile#id DataAwsccWellarchitectedAgentProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWellarchitectedAgentProfileTags <a name="DataAwsccWellarchitectedAgentProfileTags" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTags.Initializer"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

const dataAwsccWellarchitectedAgentProfileTags: dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWellarchitectedAgentProfileAggregationConfigurationList <a name="DataAwsccWellarchitectedAgentProfileAggregationConfigurationList" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

new dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference <a name="DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

new dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArn">accessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfiguration">DataAwsccWellarchitectedAgentProfileAggregationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessRoleArn`<sup>Required</sup> <a name="accessRoleArn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArn"></a>

```typescript
public readonly accessRoleArn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWellarchitectedAgentProfileAggregationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfiguration">DataAwsccWellarchitectedAgentProfileAggregationConfiguration</a>

---


### DataAwsccWellarchitectedAgentProfileTagsList <a name="DataAwsccWellarchitectedAgentProfileTagsList" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

new dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.get"></a>

```typescript
public get(index: number): DataAwsccWellarchitectedAgentProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWellarchitectedAgentProfileTagsOutputReference <a name="DataAwsccWellarchitectedAgentProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWellarchitectedAgentProfile } from '@cdktn/provider-awscc'

new dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTags">DataAwsccWellarchitectedAgentProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWellarchitectedAgentProfileTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTags">DataAwsccWellarchitectedAgentProfileTags</a>

---



