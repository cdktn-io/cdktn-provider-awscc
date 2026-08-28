# `dataAwsccSecurityagentAgentSpace` Submodule <a name="`dataAwsccSecurityagentAgentSpace` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentAgentSpace <a name="DataAwsccSecurityagentAgentSpace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_agent_space awscc_securityagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace(scope: Construct, id: string, config: DataAwsccSecurityagentAgentSpaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig">DataAwsccSecurityagentAgentSpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig">DataAwsccSecurityagentAgentSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSecurityagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSecurityagentAgentSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSecurityagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.awsResources">awsResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference">DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.codeReviewSettings">codeReviewSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference">DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.integratedResources">integratedResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList">DataAwsccSecurityagentAgentSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.targetDomainIds">targetDomainIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

---

##### `awsResources`<sup>Required</sup> <a name="awsResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.awsResources"></a>

```typescript
public readonly awsResources: DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference">DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference</a>

---

##### `codeReviewSettings`<sup>Required</sup> <a name="codeReviewSettings" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.codeReviewSettings"></a>

```typescript
public readonly codeReviewSettings: DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference">DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `integratedResources`<sup>Required</sup> <a name="integratedResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.integratedResources"></a>

```typescript
public readonly integratedResources: DataAwsccSecurityagentAgentSpaceIntegratedResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesList</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tags"></a>

```typescript
public readonly tags: DataAwsccSecurityagentAgentSpaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList">DataAwsccSecurityagentAgentSpaceTagsList</a>

---

##### `targetDomainIds`<sup>Required</sup> <a name="targetDomainIds" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.targetDomainIds"></a>

```typescript
public readonly targetDomainIds: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentAgentSpaceAwsResources <a name="DataAwsccSecurityagentAgentSpaceAwsResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceAwsResources: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources = { ... }
```


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceAwsResourcesVpcs: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs = { ... }
```


### DataAwsccSecurityagentAgentSpaceCodeReviewSettings <a name="DataAwsccSecurityagentAgentSpaceCodeReviewSettings" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceCodeReviewSettings: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings = { ... }
```


### DataAwsccSecurityagentAgentSpaceConfig <a name="DataAwsccSecurityagentAgentSpaceConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceConfig: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_agent_space#id DataAwsccSecurityagentAgentSpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentAgentSpaceIntegratedResources <a name="DataAwsccSecurityagentAgentSpaceIntegratedResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceIntegratedResources: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources = { ... }
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources = { ... }
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities = { ... }
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository = { ... }
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities = { ... }
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument = { ... }
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities = { ... }
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository = { ... }
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities = { ... }
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository = { ... }
```


### DataAwsccSecurityagentAgentSpaceTags <a name="DataAwsccSecurityagentAgentSpaceTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentAgentSpaceTags: dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns">lambdaFunctionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups">logGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets">s3Buckets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns">secretArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs">vpcs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources">DataAwsccSecurityagentAgentSpaceAwsResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

---

##### `lambdaFunctionArns`<sup>Required</sup> <a name="lambdaFunctionArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns"></a>

```typescript
public readonly lambdaFunctionArns: string[];
```

- *Type:* string[]

---

##### `logGroups`<sup>Required</sup> <a name="logGroups" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups"></a>

```typescript
public readonly logGroups: string[];
```

- *Type:* string[]

---

##### `s3Buckets`<sup>Required</sup> <a name="s3Buckets" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets"></a>

```typescript
public readonly s3Buckets: string[];
```

- *Type:* string[]

---

##### `secretArns`<sup>Required</sup> <a name="secretArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns"></a>

```typescript
public readonly secretArns: string[];
```

- *Type:* string[]

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs"></a>

```typescript
public readonly vpcs: DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceAwsResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources">DataAwsccSecurityagentAgentSpaceAwsResources</a>

---


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get"></a>

```typescript
public get(index: number): DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns">subnetArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn">vpcArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

---

##### `subnetArns`<sup>Required</sup> <a name="subnetArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns"></a>

```typescript
public readonly subnetArns: string[];
```

- *Type:* string[]

---

##### `vpcArn`<sup>Required</sup> <a name="vpcArn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn"></a>

```typescript
public readonly vpcArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs</a>

---


### DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference <a name="DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning">controlsScanning</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning">generalPurposeScanning</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings">DataAwsccSecurityagentAgentSpaceCodeReviewSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlsScanning`<sup>Required</sup> <a name="controlsScanning" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning"></a>

```typescript
public readonly controlsScanning: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `generalPurposeScanning`<sup>Required</sup> <a name="generalPurposeScanning" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning"></a>

```typescript
public readonly generalPurposeScanning: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceCodeReviewSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings">DataAwsccSecurityagentAgentSpaceCodeReviewSettings</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesList <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get"></a>

```typescript
public get(index: number): DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration">integration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources">providerResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources">DataAwsccSecurityagentAgentSpaceIntegratedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration"></a>

```typescript
public readonly integration: string;
```

- *Type:* string

---

##### `providerResources`<sup>Required</sup> <a name="providerResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources"></a>

```typescript
public readonly providerResources: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceIntegratedResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources">DataAwsccSecurityagentAgentSpaceIntegratedResources</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments">leaveComments</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode">remediateCode</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `leaveComments`<sup>Required</sup> <a name="leaveComments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments"></a>

```typescript
public readonly leaveComments: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `remediateCode`<sup>Required</sup> <a name="remediateCode" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode"></a>

```typescript
public readonly remediateCode: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace">workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument">createDocument</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument">fetchDocument</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument">updateDocument</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createDocument`<sup>Required</sup> <a name="createDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument"></a>

```typescript
public readonly createDocument: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fetchDocument`<sup>Required</sup> <a name="fetchDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument"></a>

```typescript
public readonly fetchDocument: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `updateDocument`<sup>Required</sup> <a name="updateDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument"></a>

```typescript
public readonly updateDocument: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId">pageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey">spaceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle">spaceTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId"></a>

```typescript
public readonly pageId: string;
```

- *Type:* string

---

##### `spaceKey`<sup>Required</sup> <a name="spaceKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey"></a>

```typescript
public readonly spaceKey: string;
```

- *Type:* string

---

##### `spaceTitle`<sup>Required</sup> <a name="spaceTitle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle"></a>

```typescript
public readonly spaceTitle: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments">leaveComments</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode">remediateCode</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `leaveComments`<sup>Required</sup> <a name="leaveComments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments"></a>

```typescript
public readonly leaveComments: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `remediateCode`<sup>Required</sup> <a name="remediateCode" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode"></a>

```typescript
public readonly remediateCode: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments">leaveComments</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode">remediateCode</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `leaveComments`<sup>Required</sup> <a name="leaveComments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments"></a>

```typescript
public readonly leaveComments: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `remediateCode`<sup>Required</sup> <a name="remediateCode" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode"></a>

```typescript
public readonly remediateCode: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get"></a>

```typescript
public get(index: number): DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities">bitbucketCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository">bitbucketRepository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities">confluenceCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument">confluenceDocument</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities">gitHubCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository">gitHubRepository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities">gitLabCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository">gitLabRepository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bitbucketCapabilities`<sup>Required</sup> <a name="bitbucketCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities"></a>

```typescript
public readonly bitbucketCapabilities: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a>

---

##### `bitbucketRepository`<sup>Required</sup> <a name="bitbucketRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository"></a>

```typescript
public readonly bitbucketRepository: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a>

---

##### `confluenceCapabilities`<sup>Required</sup> <a name="confluenceCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities"></a>

```typescript
public readonly confluenceCapabilities: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a>

---

##### `confluenceDocument`<sup>Required</sup> <a name="confluenceDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument"></a>

```typescript
public readonly confluenceDocument: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a>

---

##### `gitHubCapabilities`<sup>Required</sup> <a name="gitHubCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities"></a>

```typescript
public readonly gitHubCapabilities: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a>

---

##### `gitHubRepository`<sup>Required</sup> <a name="gitHubRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository"></a>

```typescript
public readonly gitHubRepository: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a>

---

##### `gitLabCapabilities`<sup>Required</sup> <a name="gitLabCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities"></a>

```typescript
public readonly gitLabCapabilities: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a>

---

##### `gitLabRepository`<sup>Required</sup> <a name="gitLabRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository"></a>

```typescript
public readonly gitLabRepository: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources</a>

---


### DataAwsccSecurityagentAgentSpaceTagsList <a name="DataAwsccSecurityagentAgentSpaceTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSecurityagentAgentSpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSecurityagentAgentSpaceTagsOutputReference <a name="DataAwsccSecurityagentAgentSpaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags">DataAwsccSecurityagentAgentSpaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentAgentSpaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags">DataAwsccSecurityagentAgentSpaceTags</a>

---



